const { getTodo, postAddTodo, deleteTodo ,putEditTodo } = require('../controllers/todo.controller');

const router = require('express').Router();

router.get('/', getTodo);
router.delete('/delete/:id', deleteTodo);
router.post('/add-todo', postAddTodo);
router.put('/edit-todo/:id', putEditTodo);

module.exports = router;
