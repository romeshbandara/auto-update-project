const {app,BrowserWindow} = require('electron')
const path = require('path')
const{autoUpdater} = require('electron-updater')
const log = require('electron-log')
log.transports.file.resolvePathFn = ()=>path.join('E:\Software Development\Electron Projects\auto-update-project\main.js','logs/main.log')
log.log("Application Version "+app.getVersion())
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

autoUpdater.on("checking-for-update",(info)=>{
    log.info("checking-for-update")
})

autoUpdater.on("update-not-available",(info)=>{
    log.info("update-not-available")
})

autoUpdater.on("update-available",()=>{
    log.info("update-available")
})

autoUpdater.on("download-progress",(progressTrack)=>{
    log.info("download-progress" + progressTrack)
})





autoUpdater.on("error",(err)=>{
    log.info("error"+err)
})

autoUpdater.on("update-downloaded",()=>{
    log.info("update-downloaded")
})

