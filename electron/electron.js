const path = require('path');
const { app, BrowserWindow, shell, Menu } = require('electron');
const http = require('http');
const menulist = require('./menulist');
const isDev = process.env.IS_DEV == "true" ? true : false;

const server = http.createServer((req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Content-Type', 'application/json')

  if (req.url == '/api/data') {
    const responseData = { message: 'this is a response from the Get APi' };
    res.end(JSON.stringify(responseData));
  } else {
    res.statusCode = 404;
    res.end(JSON.stringify({ error: 'NOTFOUND' }))
  }
})

function createWindow() {
  const mainWindow = new BrowserWindow({
    width: 1024,
    height: 650,
    autoHideMenuBar: true,
    resizable: true,
    frame: true,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      nodeIntegration: true,
      contextIsolation: false
    },
  });

  mainWindow.webContents.setWindowOpenHandler(({ url }) => {
    shell.openExternal(url);
    return { action: "deny" };
  });



  mainWindow.loadURL(
    isDev
      ? 'http://localhost:3000'
      : `file://${path.join(__dirname, '../dist/index.html')}`
  );
  // Open the DevTools.
  if (isDev) {
    //mainWindow.webContents.openDevTools();
  }

}

const menu = Menu.buildFromTemplate(menulist);
Menu.setApplicationMenu(menu);

app.whenReady().then(() => {
  createWindow()
  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })

  server.listen('8080', () => {
    console.log('8080')
  })
});

app.on('before-quit', () => {
  server.close();
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});