import 'dotenv/config';
import * as express from 'express';
import api from './api';
import * as mysql from 'mysql';

const { PORT, SQL_PASSWORD } = process.env;

const mysqlConnection = mysql.createConnection({
	host: 'localhost',
	user: 'kunlee',
	password: SQL_PASSWORD,
});

mysqlConnection.connect((err) => {
	if (err) console.log(err)
	else {
		console.log('Connected');
		mysqlConnection.query('CREATE DATABASE IF NOT EXISTS blog', (err) => {
			if (err) console.log(err);
			else {
				console.log('Database created');
			}
		});
	}
});

const app: express.Application = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/api', api);

const port = PORT || 4000;

app.listen(port, () => {
	console.log('Listening to port %d', port);
});
