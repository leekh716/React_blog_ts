import * as express from 'express';
import api from './api';

const app: express.Application = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/api', api);

app.listen(4000, () => {
	console.log('Listening to port 4000');
});
