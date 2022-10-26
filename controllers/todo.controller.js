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
		return console.error(err.message);
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
	pool.query(sql, book, (err, result) => {
		if (err) {
		  console.log(err);
		  return res.redirect("/add-todo");
		}
		// res.redirect("/");
		res.status(201).json({ message: 'todo created'})
	  });
};

exports.deleteTodo = (req, res, next) => {

	const todoData = JSON.parse(todofile);
    console.log(todoData);;

	const todoIndex = todoData.findIndex((todo) => (todo.id = req.params.id));
	console.log(todoIndex);

	if (todoIndex != null) {
		todoData.splice(todoIndex, 1);
		fs.writeFile(path.join('data', 'todo.json'), JSON.stringify(todoData),(err)=>{
			console.log(err);
			res.status(200).json({ msg: "Todo deleted successfulconst todoData = JSON.parse(todofile);ly" });
		});
	}else{

		res.status(404).json({ msg: "Todo not found" });
	}


	todoData.push(todo);
	fs.writeFile(path.join('data', 'todo.json'), JSON.stringify(todoData),(err)=>{
		console.log(err);
	});
	res.status(201).json({ message: 'todo created'})


exports.putEditTodo = (request, response) => {
  const id = parseInt(request.params.id)
  const { message } = request.body

  pool.query(
    'UPDATE todo SET message = $1 WHERE id = $2',
    [message, id],
    (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).send(`message modified with ID: ${id}`)
    }
  )
}

