
const { getTodo, postAddTodo, deleteTodo } = require('../controllers/todo.controller');


const router = require('express').Router();

router.get('/', getTodo);


router.get('/delete/:id', deleteTodo);

router.get('/add-todo', postAddTodo);

router.post('/add-todo', postAddTodo);



module.exports = router;
