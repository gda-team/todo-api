<<<<<<< HEAD
const { getTodo, deleteTodo } = require('../controllers/todo.controller');

=======
const { getTodo, postAddTodo } = require('../controllers/todo.controller');
>>>>>>> main

const router = require('express').Router();

router.get('/', getTodo);
<<<<<<< HEAD
router.get('/delete/:id', deleteTodo);
=======
router.get('/add-todo', postAddTodo);

>>>>>>> main
module.exports = router;
