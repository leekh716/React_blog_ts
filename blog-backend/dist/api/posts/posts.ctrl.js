"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.write = void 0;
var postId = 1;
var posts = [
    {
        id: 1,
        title: '제목',
        body: '내용',
    },
];
var write = function (req, res) {
    var _a = req.body, title = _a.title, body = _a.body;
    postId += 1;
    var post = { id: postId, title: title, body: body };
    posts.push(post);
    res.send(post);
};
exports.write = write;
