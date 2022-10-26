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
exports.putEditTodo = (req, res, next) => {
	
	const todo = {
		'id':req.params.id,
		"message": req.body.message,
	}
	var id = req.params.id
	var message = req.body.message
	const todoData = JSON.parse(todofile);
	 var index = todoData.findIndex(value => value.id == id)
    todoData[index] = {
        ...todoData[index],
        message: message
    }
	
	fs.writeFile(path.join('data', 'todo.json'), JSON.stringify(todoData),(err)=>{
		console.log(err);
	});
	res.status(201).json({ message: 'todo update'})
};
