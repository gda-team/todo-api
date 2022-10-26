const { getTodo, postAddTodo ,putEditTodo} = require('../controllers/todo.controller');

const router = require('express').Router();

router.get('/', getTodo);
router.post('/add-todo', postAddTodo);
router.put('/edit-todo/:id', putEditTodo);
module.exports = router;
