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

exports.deleteTodo = (req, res, next) => {
		const todoIndex = todos.findIndex((todo) => (todo.id = request.params.id));
		if (todoIndex) {
		  todos.splice(todoIndex, 1);
		  res.status(200).json({ msg: "Todo deleted successfully" });
		}
		
		res.status(404).json({ msg: "Todo not found" });
	
}




