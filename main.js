const { app, BrowserWindow, ipcMain} = require('electron/main')
const ioHook = require('iohook');
const easymidi = require('easymidi')
const path = require('path');
const midi = require("./src/process/midi")

const createWindow = () => {
  const mainWindow = new BrowserWindow({
    // show: false,
    width: 1024,
    height: 728,
    // icon: getAssetPath('icon.png'),
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
      nodeIntegration: false, // is default value after Electron v5
      contextIsolation: true, // protect against prototype pollution
      enableRemoteModule: false, // turn off remote
      // sandbox:false,
    },
  })
  mainWindow.webContents.openDevTools();
  mainWindow.loadFile(path.join(__dirname, 'dist/index.html'));
  midiHandler.setWebContents(mainWindow.webContents);

}



const midiHandler = new midi();
midiHandler.start()

app.whenReady().then(() => {
  createWindow()
  midiHandler.disableKeyboard();


  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})

ipcMain.on("toMain", (event, args) => {
  fs.readFile("path/to/file", (error, data) => {
    // Do something with file contents

    // Send result back to renderer process
    win.webContents.send("fromMain", responseObj);
  });
});


app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('will-quit', () => {
  // Unregister all shortcuts.
  globalShortcut.unregisterAll();
})
