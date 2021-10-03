import { Request, Response } from 'express';

let postId = 1; // postId:number 로 안해도 초기값으로 추론할 수 있어서

const posts: Array<{ id: number, title: string, body: string }> = [
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
export const write = (req: Request, res: Response): void => {
	const { title, body } = req.body;
	postId += 1;
	const post = { id: postId, title, body };
	posts.push(post);
	res.send(post);
};

/* 포스트 조회
GET /api/posts
*/
export const list = (_: Request, res: Response): void => {
	res.send(posts);
};

/* 특정 포스트 조회
GET /api/posts/:id
*/
export const read = (req: Request, res: Response): void => {
	const { id } = req.params;
	const post = posts.find(post => post.id.toString() === id);
	if (!post) {
		res.statusCode = 404;
		res.send({
			message: '포스트가 존재하지 않습니다.',
		});
		return;
	}
	res.send(post);
};

/* 특정 포스트 제거
DELETE /api/posts/:id
*/
export const remove = (req: Request, res: Response): void => {
	const { id } = req.params;
	const index = posts.findIndex(post => post.id.toString() === id);
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

/* 포스트 수정(교체)
PUT /api/posts/:id
{ title, body }
*/
export const replace = (req: Request, res: Response): void => {
	const { id } = req.params;
	const index = posts.findIndex(post => post.id.toString() === id);
	if (index === -1) {
		res.statusCode = 404;
		res.send({
			message: '포스트가 존재하지 않습니다.',
		});
		return;
	}
	posts[index] = {
		id,
		...req.body,
	};
	res.send(posts[index]);
};

/* 포스트 수정(특정 필드 변경)
PATCH /api/posts/:id
{ title, body }
*/
export const update = (req: Request, res: Response): void => {
	const { id } = req.params;
	const index = posts.findIndex(post => post.id.toString() === id);
	if (index === -1) {
		res.statusCode = 404;
		res.send({
			message: '포스트가 존재하지 않습니다.',
		});
		return;
	}
	posts[index] = {
		...posts[index],
		...req.body,
	};
	res.send(posts[index]);
};
