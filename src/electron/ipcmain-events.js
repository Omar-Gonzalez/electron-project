const {ipcMain} = require('electron');


module.exports = {
  testIpc: ipcMain.handle('testIpc', async (event, data) => {
    console.log(data)
    return data;
  }),
}