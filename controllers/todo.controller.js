const fs = require('fs');
const path = require('path');

const todofile = fs.readFileSync(path.join('data', 'todo.json'), {
	encoding: 'utf8',
	flag: 'r',
});
exports.getTodo = (req, res, next) => {
	const tododata = JSON.parse(todofile);
	res.json({ message: tododata });
};


exports.postAddTodo = (req, res, next) => {
	const key = Math.floor(Math.random() * 100) + 1;;
	const todo = {
		'id':key,
		"message": req.body.message,
	}
	const todoData = JSON.parse(todofile);

	todoData.push(todo);
	fs.writeFile(path.join('data', 'todo.json'), JSON.stringify(todoData),(err)=>{
		console.log(err);
	});
	res.redirect('/');
};

exports.deleteTodo = (req, res, next) => {
	const todoIndex = todos.findIndex((todo) => (todo.id = request.params.id));
	if (todoIndex) {
	  todos.splice(todoIndex, 1);
	  res.status(200).json({ msg: "Todo deleted successfully" });
	}
	
	res.status(404).json({ msg: "Todo not found" });

}

