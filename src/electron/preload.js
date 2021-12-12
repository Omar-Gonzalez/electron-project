const {
  contextBridge,
  ipcRenderer
} = require("electron");


contextBridge.exposeInMainWorld('ipc', {
  invoke: async (channel, data) => {
    const validChannels = ['testIpc'];
    if (validChannels.includes(channel)) {
      return await ipcRenderer.invoke(channel, data)
    }
  },
  receive: (channel, func) => {
    let validChannels = [''];
    if (validChannels.includes(channel)) {
      // Deliberately strip event as it includes `sender`
      ipcRenderer.on(channel, (event, ...args) => func(...args));
    }
  }
})