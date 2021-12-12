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
  }
});