// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
const electron = require("electron");
const JsonDB = require("node-json-db");

var db = new JsonDB("mydata", true, true);
var viewModel = {};

viewModel.monthlyincome = ko.observableArray(db.getData("/monthly-income"));
viewModel.monthlyincomeTotal = ko.pureComputed(function () {
    var total = 0;
    ko.utils.arrayForEach(this.monthlyincome(), function (item) {
        var value = parseFloat(item.amount);
        if (!isNaN(value)) {
            total += value;
        }
    });
    return total.toFixed(2);
}, viewModel);

viewModel.monthlyexpenses = ko.observableArray(db.getData("/monthly-expenses"));
viewModel.monthlyexpensesTotal = ko.pureComputed(function () {
    var total = 0;
    ko.utils.arrayForEach(this.monthlyexpenses(), function (item) {
        var value = parseFloat(item.amount);
        if (!isNaN(value)) {
            total += value;
        }
    });
    return total.toFixed(2);
}, viewModel);

viewModel.monthlysavings = ko.observableArray(db.getData("/monthly-savings"));
viewModel.monthlysavingsTotal = ko.pureComputed(function () {
    var total = 0;
    ko.utils.arrayForEach(this.monthlysavings(), function (item) {
        var value = parseFloat(item.amount);
        if (!isNaN(value)) {
            total += value;
        }
    });
    return total.toFixed(2);
}, viewModel);

viewModel.monthlydebts = ko.observableArray(db.getData("/monthly-debts"));
viewModel.monthlydebtsTotal = ko.pureComputed(function () {
    var total = 0;
    ko.utils.arrayForEach(this.monthlydebts(), function (item) {
        var value = parseFloat(item.amount);
        if (!isNaN(value)) {
            total += value;
        }
    });
    return total.toFixed(2);
}, viewModel);

viewModel.savings = ko.observableArray(db.getData("/savings"));
viewModel.assets = ko.observableArray(db.getData("/assets"));
viewModel.debts = ko.observableArray(db.getData("/debts"));

ko.applyBindings(viewModel);

