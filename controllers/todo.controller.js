const fs = require('fs');
const path = require('path');

exports.getTodo = (req, res, next) => {
	const todofile = fs.readFileSync(path.join('data', 'todo.json'), {
		encoding: 'utf8',
		flag: 'r',
	});
	const tododata = JSON.parse(todofile);
	res.status(200).json({ todo: tododata });
};
