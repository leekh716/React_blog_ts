"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var api_1 = require("./api");
var app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/api', api_1.default);
app.listen(4000, function () {
    console.log('Listening to port 4000');
});
