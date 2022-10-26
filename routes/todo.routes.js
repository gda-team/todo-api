const { getTodo, postAddTodo } = require('../controllers/todo.controller');

const router = require('express').Router();

router.get('/', getTodo);
router.post('/add-todo', postAddTodo);

module.exports = router;
