import * as express from 'express';
import * as postsCtrl from './posts.ctrl';

const posts = express.Router();

const printInfo = (req: express.Request, res: express.Response) => {
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

export default posts;
