import { app, BrowserWindow, ipcMain, globalShortcut, Tray, Menu, nativeImage } from 'electron';
import path from 'path';
import fs from 'fs';
import midi from "./process/midi.js";
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const isDev = process.env.NODE_ENV === 'development' || !app.isPackaged;

const midiHandler = new midi();
let tray = null;
let mainWindow = null;

const createWindow = () => {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, "preload.cjs"),
      nodeIntegration: false,
      contextIsolation: true,
      enableRemoteModule: false,
    },
  });

  // mainWindow.webContents.openDevTools();

  if (isDev) {
    mainWindow.loadURL('http://localhost:5173');
  } else {
    mainWindow.loadFile(path.join(__dirname, '../dist/index.html'));
  }

  midiHandler.setWebContents(mainWindow.webContents);

  mainWindow.on('closed', () => {
    mainWindow = null;
  });
}

const updateTrayState = () => {
  if (!tray) return;

  const activated = midiHandler.activated;
  const iconName = activated ? 'tray-on.png' : 'tray-off.png';
  const iconPath = path.join(__dirname, '..', 'assets', iconName);

  try {
    const image = nativeImage.createFromPath(iconPath).resize({ width: 22, height: 22 });
    tray.setImage(image);
    // tray.setTitle(activated ? ' ON' : ' OFF'); // Added title for visibility

    const contextMenu = Menu.buildFromTemplate([
      {
        label: activated ? 'MIDI status: ON' : 'MIDI status: OFF',
        enabled: false
      },
      {
        label: activated ? 'Deactivate Keyboard' : 'Activate Keyboard',
        click: () => {
          // Trigger the internal logic in midiHandler
          // We can call these directly since midiHandler is in the same process
          if (activated) {
            ipcMain.emit('deactivateMidi');
          } else {
            ipcMain.emit('activateMidi');
          }
          // The IPC listeners in midi.js also need to hear it if they are using ipcMain.on
          // Since we share ipcMain, emits will trigger .on listeners too.
        }
      },
      { type: 'separator' },
      {
        label: 'Open MIDIWRITER',
        click: () => {
          if (mainWindow) {
            if (mainWindow.isMinimized()) mainWindow.restore();
            mainWindow.show();
            mainWindow.focus();
          } else {
            createWindow();
          }
        }
      },
      { type: 'separator' },
      {
        label: 'Exit',
        click: () => {
          app.quit();
        }
      }
    ]);
    tray.setContextMenu(contextMenu);
  } catch (err) {
    console.error('Error updating tray:', err);
  }
};

const setupTray = () => {
  const iconPath = path.join(__dirname, '..', 'assets', 'tray-on.png');
  const image = nativeImage.createFromPath(iconPath).resize({ width: 22, height: 22 });

  tray = new Tray(image);
  tray.setToolTip('MIDIWRITER');

  // Update tray on IPC events
  ipcMain.on('activateMidi', () => setTimeout(updateTrayState, 100));
  ipcMain.on('deactivateMidi', () => setTimeout(updateTrayState, 100));
  ipcMain.on('toggleActivated', () => setTimeout(updateTrayState, 100));

  updateTrayState();
}

app.whenReady().then(() => {
  try {
    midiHandler.start();
    createWindow();
    midiHandler.disableKeyboard();
    setupTray();
  } catch (err) {
    console.error('Failed on startup:', err);
  }

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

ipcMain.on("toMain", (event, args) => {
  if (mainWindow) {
    mainWindow.webContents.send("fromMain", { status: "received" });
  }
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('will-quit', () => {
  globalShortcut.unregisterAll();
  midiHandler.stop();
});