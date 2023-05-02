const { app, BrowserWindow } = require('electron');
const path = require('path');

let window;

function createWindow () {
  window = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'desktop.js'),
      nodeIntegration: true
    },
  });

  window.loadFile('./dist/resfrac-assessment/index.html');
  // Open the DevTools.
  window.webContents.openDevTools();

  window.on('closed', function () {
    window = null
  });
}

app?.whenReady().then(() => {
  createWindow();
});
