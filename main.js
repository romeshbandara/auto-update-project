const {app,BrowserWindow} = require('electron')
const path = require('path')
const{autoUpdater} = require('electron-updater')
const log = require('electron-log')
log.transports.file.resolvePathFn = ()=>path.join('E:\Software Development\Electron Projects\auto-update-project\main.js','logs/main.log')
log.info("Hello, log")
log.warn("some problem appears")
let win

function createWindow(){
    win = new BrowserWindow(
        {
            width:300,
            height:400,
        }
    )
    win.loadFile(path.join(__dirname,'index.html'))
}

app.on('ready',()=>{
    createWindow()
    autoUpdater.checkForUpdatesAndNotify()
})

autoUpdater.on("update-available",()=>{
    log.info("update-available")
})

autoUpdater.on("download-progress",()=>{
    log.info("download-progress")
})