let postId = 1;

const posts = [
	{
		id: 1,
		title: '제목',
		body: '내용',
	},
];

export const write = (req, res) => {
	const { title, body } = req.body;
	postId += 1;
	const post = { id: postId, title, body };
	posts.push(post);
	res.send(post);
};
