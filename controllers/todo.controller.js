const fs = require('fs');
const path = require('path');

const todofile = fs.readFileSync(path.join('data', 'todo.json'), {
	encoding: 'utf8',
	flag: 'r',
});
exports.getTodo = (req, res, next) => {
	const tododata = JSON.parse(todofile);
	res.status(200).json({ todo: tododata });
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
	res.status(201).json({ message: 'todo created'})
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

}

