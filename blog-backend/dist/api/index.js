"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var posts_1 = require("./posts");
//router는 express.Router가 아닐거같고 뭐지 맞나?
var api = express.Router();
api.use('/posts', posts_1.default);
exports.default = api;
