const { getTodo, postAddTodo } = require('../controllers/todo.controller');

const router = require('express').Router();

router.get('/', getTodo);
router.get('/add-todo', postAddTodo);

module.exports = router;
