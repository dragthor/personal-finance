// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
const electron = require("electron");
const JsonDB = require("node-json-db");

var db = new JsonDB("mydata", true, true);
var viewModel = {};

viewModel.monthlyincome = ko.observableArray(db.getData("/monthly-income"));
viewModel.monthlyexpenses = ko.observableArray(db.getData("/monthly-expenses"));
viewModel.monthlysavings = ko.observableArray(db.getData("/monthly-savings"));
viewModel.monthlydebts = ko.observableArray(db.getData("/monthly-debts"));

viewModel.savings = ko.observableArray(db.getData("/savings"));
viewModel.assets = ko.observableArray(db.getData("/assets"));
viewModel.debts = ko.observableArray(db.getData("/debts"));

ko.applyBindings(viewModel);