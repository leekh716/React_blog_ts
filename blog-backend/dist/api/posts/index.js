"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var postsCtrl = require("./posts.ctrl");
var posts = express.Router();
var printInfo = function (req, res) {
    res.send({
        method: req.method,
        path: req.originalUrl,
        params: req.params,
    });
};
posts.get('/', printInfo);
posts.post('/', postsCtrl.write);
posts.get('/:id', printInfo);
posts.delete('/:id', printInfo);
posts.put('/:id', printInfo);
posts.patch('/:id', printInfo);
exports.default = posts;
