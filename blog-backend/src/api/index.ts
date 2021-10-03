import * as express from 'express';
import posts from './posts';

//router는 express.Router가 아닐거같고 뭐지 맞나?
const api: express.Router = express.Router();

api.use('/posts', posts);

export default api;
