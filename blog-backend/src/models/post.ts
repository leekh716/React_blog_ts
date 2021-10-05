import * as mysql from 'mysql';

const { SQL_PASSWORD } = process.env;

const mysqlConnection = mysql.createConnection({
	host: 'localhost',
	user: 'kunlee',
	database: 'blog',
	password: SQL_PASSWORD,
});

mysqlConnection.connect((err) => {
	if (err) console.log(err)
	else {
		const sql = 'CREATE TABLE IF NOT EXISTS `blog`.`Post` (\
			`id` INT UNSIGNED NOT NULL AUTO_INCREMENT,\
			`title` VARCHAR(45) NOT NULL,\
			`body` VARCHAR(45) NOT NULL,\
			`publishedDate` VARCHAR(45) NOT NULL,\
			PRIMARY KEY (`id`),\
			UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE);';
		mysqlConnection.query(sql, (err) => {
			if (err) console.log(err);
			else {
				console.log('table created');
			}
		});
	}
});
