"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
var express = require("express");
var api_1 = require("./api");
var mysql = require("mysql");
var _a = process.env, PORT = _a.PORT, SQL_PASSWORD = _a.SQL_PASSWORD;
var mysqlConnection = mysql.createConnection({
    host: 'localhost',
    user: 'kunlee',
    password: SQL_PASSWORD,
});
mysqlConnection.connect(function (err) {
    if (err)
        console.log(err);
    else {
        console.log('Connected');
        mysqlConnection.query('CREATE DATABASE IF NOT EXISTS blog', function (err) {
            if (err)
                console.log(err);
            else {
                console.log('Database created');
            }
        });
    }
});
var app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/api', api_1.default);
var port = PORT || 4000;
app.listen(port, function () {
    console.log('Listening to port %d', port);
});
