const {
    contextBridge,
    ipcRenderer
} = require("electron");


// Expose protected methods that allow the renderer process to use
// the ipcRenderer without exposing the entire object
contextBridge.exposeInMainWorld(
    "midiApi", {
        // doThing: () => ipcRenderer.on("toggleActivated", (data) => {
        //     console.log(data)
        // }),
        toggleActivated: () => {ipcRenderer.send("toggleActivated")},
        keypress: (event) => {ipcRenderer.on("keypress", (event) => {
            console.log(event)
        })},
        send: (channel, data) => {
            // whitelist channels
            let validChannels = ["toMain", "changeLayoutPreset", "changeVelocity", "toggleActivated", "changeChannel", "changeTranspose","activateMidi", "deactivateMidi"];
            if (validChannels.includes(channel)) {
                ipcRenderer.send(channel, data);
            }
        },
        receive: (channel, func) => {
            let validChannels = ["fromMain", "keypress", "keyup", "activateMidi", "deactivateMidi"];
            if (validChannels.includes(channel)) {
                // Deliberately strip event as it includes `sender` 
                ipcRenderer.on(channel, (event, ...args) => func(...args));
            }
        }
    }
);
