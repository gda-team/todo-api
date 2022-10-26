const fs = require('fs');
const path = require('path');

exports.getTodo = (req, res, next) => {
	const todofile = fs.readFileSync(path.join('data', 'todo.json'), {
		encoding: 'utf8',
		flag: 'r',
	});
	const tododata = JSON.parse(todofile);
	res.json({ message: tododata });
};
exports.postAddTodo = (req, res, next) => {
	this.id = Math.random().toString();
	
	res.json({ message: 'hello ' });
};
