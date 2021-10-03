"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.update = exports.replace = exports.remove = exports.read = exports.list = exports.write = void 0;
var postId = 1; // postId:number 로 안해도 초기값으로 추론할 수 있어서
var posts = [
    {
        id: 1,
        title: '제목',
        body: '내용',
    },
];
/* 포스트 작성
POST /api/posts
{ title, body }
*/
var write = function (req, res) {
    var _a = req.body, title = _a.title, body = _a.body;
    postId += 1;
    var post = { id: postId, title: title, body: body };
    posts.push(post);
    res.send(post);
};
exports.write = write;
/* 포스트 조회
GET /api/posts
*/
var list = function (_, res) {
    res.send(posts);
};
exports.list = list;
/* 특정 포스트 조회
GET /api/posts/:id
*/
var read = function (req, res) {
    var id = req.params.id;
    var post = posts.find(function (post) { return post.id.toString() === id; });
    if (!post) {
        res.statusCode = 404;
        res.send({
            message: '포스트가 존재하지 않습니다.',
        });
        return;
    }
    res.send(post);
};
exports.read = read;
/* 특정 포스트 제거
DELETE /api/posts/:id
*/
var remove = function (req, res) {
    var id = req.params.id;
    var index = posts.findIndex(function (post) { return post.id.toString() === id; });
    if (index === -1) {
        res.statusCode = 404;
        res.send({
            message: '포스트가 존재하지 않습니다.',
        });
        return;
    }
    posts.splice(index, 1);
    res.statusCode = 204; //No content
    res.send();
};
exports.remove = remove;
/* 포스트 수정(교체)
PUT /api/posts/:id
{ title, body }
*/
var replace = function (req, res) {
    var id = req.params.id;
    var index = posts.findIndex(function (post) { return post.id.toString() === id; });
    if (index === -1) {
        res.statusCode = 404;
        res.send({
            message: '포스트가 존재하지 않습니다.',
        });
        return;
    }
    posts[index] = __assign({ id: id }, req.body);
    res.send(posts[index]);
};
exports.replace = replace;
/* 포스트 수정(특정 필드 변경)
PATCH /api/posts/:id
{ title, body }
*/
var update = function (req, res) {
    var id = req.params.id;
    var index = posts.findIndex(function (post) { return post.id.toString() === id; });
    if (index === -1) {
        res.statusCode = 404;
        res.send({
            message: '포스트가 존재하지 않습니다.',
        });
        return;
    }
    posts[index] = __assign(__assign({}, posts[index]), req.body);
    res.send(posts[index]);
};
exports.update = update;
