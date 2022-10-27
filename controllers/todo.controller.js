const fs = require('fs');
const path = require('path');
const { Pool } = require("pg");
const pool = require('../config/db')

const dotenv = require('dotenv');
dotenv.config();


const todofile = fs.readFileSync(path.join('data', 'todo.json'), {
	encoding: 'utf8',
	flag: 'r',
});
exports.getTodo = (req, res, next) => {
	const sql = "SELECT * FROM todo ORDER BY ID ASC";
	pool.query(sql, [], (err, result) => {
	  if (err) {
		 res.status(400).json({ msg: " failed to fecth Todo" });
	  }
	  console.log(result.rows);
	  res.status(200).json({ todo: result.rows });
	});

	// const tododata = JSON.parse(todofile);
};


exports.postAddTodo = (req, res, next) => {
	const sql =
    "INSERT INTO todo (message) VALUES ($1)";
	const todo = ["val"]
	pool.query(sql, todo, (err, result) => {
		if (err) {
		  console.log(err);
      res.status(400).json({ message: 'failed to add todo'})
		}
		res.status(201).json({ message: 'todo created'})
	  });
};

//suppression dans la data base
exports.deleteTodo = (req, res, next) => {
	const id = req.params.id;
	console.log(id);
	const sql = "DELETE FROM todo WHERE ID = $1";
	pool.query(sql, [id], (err, result) => {
		if (err) {
			console.log(err)
			res.status(400).json({ msg: " failed to delete Todo" });
		}
		res.status(201).json({ msg: "Todo deleted" });
	  
	});
}

exports.putEditTodo = (request, response) => {
  const id = parseInt(request.params.id)
  const { message } = request.body

  pool.query(
    'UPDATE todo SET message = $1 WHERE id = $2',
    [message, id],
    (error, results) => {
      if (error) {
         res.status(400).json({ msg: " failed to update Todo" });
      }
      response.status(200).send(`message modified with ID: ${id}`)
    }
  )
}


