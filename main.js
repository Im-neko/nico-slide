const electron = require('electron');
const { ipcMain } = require('electron');
const io = require('socket.io');

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
    width: 1200,
    height: 600,
    frame: true,
    show: true,
    transparent: true,
    resizable: true,
    titleBarStyle: 'hidden',
    alwaysOnTop: false,
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
