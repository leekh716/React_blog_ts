"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mysql = require("mysql");
var SQL_PASSWORD = process.env.SQL_PASSWORD;
var mysqlConnection = mysql.createConnection({
    host: 'localhost',
    user: 'kunlee',
    database: 'blog',
    password: SQL_PASSWORD,
});
mysqlConnection.connect(function (err) {
    if (err)
        console.log(err);
    else {
        var sql = 'CREATE TABLE IF NOT EXISTS `blog`.`Post` (\
			`id` INT UNSIGNED NOT NULL AUTO_INCREMENT,\
			`title` VARCHAR(45) NOT NULL,\
			`body` VARCHAR(45) NOT NULL,\
			`publishedDate` VARCHAR(45) NOT NULL,\
			PRIMARY KEY (`id`),\
			UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE);';
        mysqlConnection.query(sql, function (err) {
            if (err)
                console.log(err);
            else {
                console.log('Database created');
            }
        });
    }
});
