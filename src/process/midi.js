const easymidi = require('easymidi');
const ioHook = require('iohook');
const keymap = require('./keymap');
const layoutPreset = require('./layoutPreset');
const {globalShortcut} = require('electron')
const { ipcMain } = require('electron')
// import {combineReducers, createStore, applyMiddleware} from 'redux';
// import reducers from '../reducers';
// import {keypress, keyup} from '../actions/keyboard';


const input = new easymidi.Input('MIDIWriter', true);
const output = new easymidi.Output('MIDIWriter', true);


//space 57
//tab 15
//lshift 42
// lctrl 29
//loption 56
// lcmd 3675
// rcmd 3676
// rshift 54



module.exports = class midi {
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

  start(){
    ioHook.on('keydown', event => {
      let keycode = parseInt(event.keycode);
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
    });

    ioHook.on('keyup', event => {
      let keycode = parseInt(event.keycode);
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
  if(!globalShortcut.isRegistered("Alt+Command+Tab")){
    globalShortcut.register("Alt+Command+Tab", () => {
      if(this.activated){
        this.enableKeyboard();
        this.webContents.send('deactivateMidi');
        this.activated = false;
      }else{
        this.disableKeyboard();
        this.webContents.send('activateMidi');
        this.activated = true;
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
}
