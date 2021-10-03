import * as express from 'express';
import * as postsCtrl from './posts.ctrl';

const posts: express.Router = express.Router();

posts.get('/', postsCtrl.list);
posts.post('/', postsCtrl.write);
posts.get('/:id', postsCtrl.read);
posts.delete('/:id', postsCtrl.remove);
posts.patch('/:id', postsCtrl.update);

export default posts;
