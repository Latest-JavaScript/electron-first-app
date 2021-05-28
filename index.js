const electron = require("electron");
const {app, BrowserWindow} = electron;

function createMainWindow(){
   const mainWindow = new BrowserWindow();
   mainWindow.loadURL(__dirname+"/index.html");        
}

app.on("ready",createMainWindow);














