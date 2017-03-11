// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
const electron = require("electron");
const JsonDB = require("node-json-db");

var db = new JsonDB("myDataBase", true, true);
var viewModel = {};

viewModel.savings = ko.observableArray(db.getData("/savings"));
viewModel.assets = ko.observableArray(db.getData("/assets"));
viewModel.debts = ko.observableArray(db.getData("/debts"));

ko.applyBindings(viewModel);