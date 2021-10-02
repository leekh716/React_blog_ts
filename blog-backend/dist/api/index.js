"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var posts_1 = require("./posts");
var api = express.Router();
api.use('/posts', posts_1.default);
exports.default = api;
