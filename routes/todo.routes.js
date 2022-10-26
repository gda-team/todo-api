const { getTodo, deleteTodo } = require('../controllers/todo.controller');


const router = require('express').Router();

router.get('/', getTodo);
router.get('/delete/:id', deleteTodo);
module.exports = router;
