const electron = require('electron');
const { ipcMain } = require('electron');

const app = electron.app
const BrowserWindow = electron.BrowserWindow



app.on('window-all-closed', function() {
  if (process.platform != 'darwin') {
    app.quit();
  }
});

app.on('ready', function() {
  const { width, height } = electron.screen.getPrimaryDisplay().workAreaSize


  let mainWindow = new BrowserWindow({
    left: 0,
    top: 0,
    width,
    height,
    frame: true,
    show: true,
    transparent: true,
    resizable: false,
    titleBarStyle: 'hidden',
    alwaysOnTop: true,
  })

  mainWindow.maximize();
  mainWindow.loadURL('file://' + __dirname + '/index.html')
  // mainWindow.openDevTools(); 
  mainWindow.on('closed', function() {
    mainWindow = null
  });

  ipcMain.on('twitterStatus', (event, arg) => {
    mainWindow.setIgnoreMouseEvents(arg);
  });

});
