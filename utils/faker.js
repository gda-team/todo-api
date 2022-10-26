const { Pool } = require('pg');

const pool = new Pool({
	user: 'oetzeioj',
	host: 'peanut.db.elephantsql.com',
	database: 'oetzeioj',
	password: 'V1HSQczUMcdz1Vh50Nk8sFc3W-AJ0JCb',
	port: 5432,
});

const fill = () => {
	const sql_create = `
	CREATE TABLE IF NOT EXISTS todo (
	ID SERIAL PRIMARY KEY,
	message VARCHAR(150) NOT NULL
	);`;

	pool.query(sql_create, [], (err, result) => {
		if (err) {
			return console.error(err.message);
		}
		console.log("Création réussie de la table 'todo'");
	});

	// Alimentation de la table
	const sql_insert = `
	INSERT INTO todo (message) VALUES ( 'to do ') ON CONFLICT DO NOTHING;`;

	pool.query(sql_insert, [], (err, result) => {
		if (err) {
			return console.error(err.message);
		}
		const sql_sequence = "SELECT SETVAL('todo_ID_Seq', MAX(ID)) FROM todo;";
		pool.query(sql_sequence, [], (err, result) => {
			if (err) {
				return console.error(err.message);
			}
			console.log("Alimentation réussie de la table 'todo'");
		});
	});
};

module.exports = fill;
