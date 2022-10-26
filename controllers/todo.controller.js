const fs = require('fs');
const path = require('path');
const { Pool } = require("pg");

const pool = new Pool({
    user: process.env.USER_DB,
    host: process.env.SERVER_DB,
    database: process.env.NAME_DB,
    password: process.env.PASS_DB,
    port: 5432,
  });
  const sql_create = `
CREATE TABLE IF NOT EXISTS todo (
  ID SERIAL PRIMARY KEY,
  message VARCHAR(150) NOT NULL,
);`;

pool.query(sql_create, [], (err, result) => {
  if (err) {
    return console.error(err.message);
  }
  console.log("Création réussie de la table 'todo'");
});

// Alimentation de la table
const sql_insert = `INSERT INTO todo ( message) VALUES
    ( 'to do '),
  ON CONFLICT DO NOTHING;`;
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


const todofile = fs.readFileSync(path.join('data', 'todo.json'), {
	encoding: 'utf8',
	flag: 'r',
});
exports.getTodo = (req, res, next) => {
	const tododata = JSON.parse(todofile);
	res.status(200).json({ todo: tododata });
};

exports.postAddTodo = (req, res, next) => {
	const sql =
    "INSERT INTO todo (message) VALUES ($1)";
	const todo = [
		req.body.message
	]
	pool.query(sql, book, (err, result) => {
		if (err) {
		  console.log(err);
		  return res.redirect("/add-todo");
		}
		// res.redirect("/");
		res.status(201).json({ message: 'todo created'})
	  });
};
