const { app, BrowserWindow } = require('electron')

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let appWindow

function createWindow () {
  // Create the browser window.
  appWindow = new BrowserWindow({
    width: 400,
    height: 550,
    webPreferences: {
      nodeIntegration: true
    }
  })

  // and load the index of the app.
  appWindow.loadFile('index.html')

  // Emitted when the window is closed.
  appWindow.on('closed', () => {
    appWindow = null
  })
}

app.on('ready', createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (appWindow === null) {
    createWindow()
  }
})