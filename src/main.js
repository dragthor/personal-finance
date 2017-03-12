const electron = require("electron");
const { dialog } = require("electron");
const JsonDB = require("node-json-db");

const { Menu, MenuItem, clipboard } = electron;

var fs = require("fs");

// Module to control application life.
const app = electron.app;

const ipc = electron.ipcMain;

// Module to create native browser window.
const BrowserWindow = electron.BrowserWindow;

// Menu
const template = [
  {
    label: "File",
    role: "window",
    submenu: [
      {
        label: "Back Up",
        accelerator: "CmdOrCtrl+B",
        click() {
          // dialog.showSaveDialog(function (fileName) {
          //   if (typeof fileName === "undefined") return;

            // mainWindow.webContents.executeJavaScript("document.getElementById('txtInput').value;", function (result) {
            //   if (typeof result === "undefined") return;
            //   if (result.length === 0) return;
            //   if (result.trim().length === 0) return;

            //   fs.writeFile(fileName, result.trim(), function (err) {
            //     if (err != null) console.log(err);
            //   });
            // });
          // });
        }
      },
      {
        role: "close"
      }
    ]
  },

  {
    label: "View",
    submenu: [
      {
        label: "Reload",
        accelerator: "CmdOrCtrl+R",
        click(item, focusedWindow) {
          if (focusedWindow) focusedWindow.reload();
        }
      }
    ]
  },

  {
    role: "help",
    submenu: [
      {
        label: "Learn More",
        accelerator: "CmdOrCtrl+M",
        click() { require("electron").shell.openExternal("https://github.com/dragthor/personal-finance"); }
      }
    ]
  },
];


const menu = Menu.buildFromTemplate(template);

// Keep a global reference of the window object, if you don"t, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow

function createWindow() {
  // Create the browser window.
  mainWindow = new BrowserWindow({
    width: 810, height: 600, center: true, fullscreenable: false
  })

  // var db = new JsonDB("mydata", true, true);

  // db.push("/savings", [{ 'name': 'Bank1', 'balance': 1000, 'yield': 10 }, { 'name': 'Bank2', 'balance': 1000, 'yield': 10 }]);

  // and load the index.html of the app.
  mainWindow.loadURL(`file://${__dirname}/index.html`);

  // Open the DevTools.
  mainWindow.webContents.openDevTools();


  Menu.setApplicationMenu(menu);


  // Emitted when the window is closed.
  mainWindow.on("closed", function () {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null;
  })
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on("ready", createWindow);

// Quit when all windows are closed.
app.on("window-all-closed", function () {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", function () {
  // On OS X it"s common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) {
    createWindow();
  }
});