import easymidi from 'easymidi';
import { uIOhook as ioHook } from 'uiohook-napi';
import keymap from './keymap.js';
import layoutPreset from './layoutPreset/index.js';
import { globalShortcut, ipcMain } from 'electron';

const input = new easymidi.Input('MIDIWriter', true);
const output = new easymidi.Output('MIDIWriter', true);

export default class midi {
  constructor() {
    this.webContents = null
    this.activated = true;
    this.currentLayoutPreset = "chromatic";
    this.velocity = 100;
    this.channel = 0;
    this.transpose = 0;
    this.sustain = false;
    this.sustainModifier = "space";
  }

  start() {
    // Keydown event handler with safety guards
    ioHook.on('keydown', event => {
      try {
        let keycode = parseInt(event.keycode);
        
        // Safety check for webContents
        const canSend = this.webContents && !this.webContents.isDestroyed();

        if (keymap[keycode] && !keymap[keycode].status && this.activated) {
          this.sendNote(layoutPreset[this.currentLayoutPreset][keycode], true);
          keymap[keycode].status = true;
          
          if (canSend) {
            this.webContents.send("keypress", event.keycode);
          }
        }

        if (keycode == 57 && !this.sustain) {
          this.sustainOn();
        }
      } catch (err) {
        console.error('Error in uiohook keydown listener:', err);
      }
    });

    // Keyup event handler with safety guards
    ioHook.on('keyup', event => {
      try {
        let keycode = parseInt(event.keycode);
        const canSend = this.webContents && !this.webContents.isDestroyed();

        if (keymap[keycode] && keymap[keycode].status && this.activated) {
          this.sendNote(layoutPreset[this.currentLayoutPreset][keycode], false);
          keymap[keycode].status = false;
          
          if (canSend) {
            this.webContents.send("keyup", event.keycode);
          }
        }
        
        if (keycode == 57 && this.sustain) {
          this.sustainOff();
        }
      } catch (err) {
        console.error('Error in uiohook keyup listener:', err);
      }
    });

    ioHook.start();

    // In main process.
    ipcMain.on('keypress', (event, keycode) => {
      if(keymap[keycode] && !keymap[keycode].status && this.activated){
        console.log(keymap[keycode]);
        this.sendNote(layoutPreset[this.currentLayoutPreset][keycode], true);
        keymap[keycode].status = true;
        if(this.webContents && !this.webContents.isDestroyed()){
          this.webContents.send("keypress", event.keycode);
        }
      }

      if(keycode == 57 && !this.sustain){
        this.sustainOn();
      }
    })

    ipcMain.on('keyup', (event, keycode) => {
      if(keymap[keycode] && keymap[keycode].status && this.activated){
        console.log(keymap[keycode]);
        this.sendNote(layoutPreset[this.currentLayoutPreset][keycode], false);
        keymap[keycode].status = false;
        if(this.webContents && !this.webContents.isDestroyed()){
          this.webContents.send("keyup", event.keycode);
        }
      }
      if(keycode == 57 && this.sustain){
        this.sustainOff();
      }
    })

    ipcMain.on('changeLayoutPreset', (event, arg) => {
      this.currentLayoutPreset = arg;
    })

    ipcMain.on('changeVelocity', (event, velocity) => {
      this.velocity = parseInt(velocity);
    })
    ipcMain.on('changeChannel', (event, channel) => {
      this.channel = parseInt(channel);
    })
    ipcMain.on('changeTranspose', (event, transpose) => {
      this.transpose = parseInt(transpose);
    })
    ipcMain.on('activateMidi', (event) => {
      this.disableKeyboard();
      this.activated = true;
    })
    ipcMain.on('deactivateMidi', (event) => {
      this.enableKeyboard();
      this.activated = false;
    })
    ipcMain.on('toggleActivated', (event) => {
      if(this.activated){
        this.enableKeyboard();
      }else{
        this.disableKeyboard();
      }
      this.activated = !this.activated;
    })
    ipcMain.on('getMidiStatus', (event) => {
      if (this.webContents && !this.webContents.isDestroyed()) {
        this.webContents.send('midiStatus', this.activated);
      }
    })
  }
  sendNote(note, press){
    if(press){
      console.log(this.channel)
      output.send('noteon', {
        note: note + this.transpose,
        velocity: this.velocity,
        channel: this.channel,
      });
    }else{
      output.send('noteoff', {
        note: note + this.transpose,
        velocity: 0,
        channel: this.channel,
      });
    }
  }

  sustainOn(){
    output.send('cc', {
      controller: 64,
      value: 127,
      channel: this.channel,
    });
    this.sustain = true;
  }

  sustainOff(){
    output.send('cc', {
      controller: 64,
      value: 0,
      channel: this.channel,
    });
    this.sustain = false;
  }

  setWebContents(webContents){
    this.webContents = webContents;
  }

setToggleShortcut(){
    if(!globalShortcut.isRegistered("Alt+Tab")){
    globalShortcut.register("Alt+Tab", () => {
      // Trigger the centralized toggle logic
      ipcMain.emit('toggleActivated');
      
      // Also notify the renderer since it might be open
      if(this.activated){
        if(this.webContents && !this.webContents.isDestroyed()){
          this.webContents.send('activateMidi');
        }
      }else{
        if(this.webContents && !this.webContents.isDestroyed()){
          this.webContents.send('deactivateMidi');
        }
      }
    });
  }
}

  disableKeyboard (){
    const allKeys = [];
    for(var i in keymap){
      allKeys.push(keymap[i].key)
    }

    globalShortcut.registerAll(allKeys, () => {
      return;
    });
    this.setToggleShortcut();

  }

  enableKeyboard (){
    const allKeys = [];
    for(var i in keymap){
      allKeys.push(keymap[i].key)
    }

    globalShortcut.unregisterAll();
    this.setToggleShortcut();
  }

  stop() {
    try {
      ioHook.stop();
      ioHook.removeAllListeners();
      console.log('uiohook stopped successfully');
    } catch (err) {
      console.error('Error stopping uiohook:', err);
    }
  }
}
