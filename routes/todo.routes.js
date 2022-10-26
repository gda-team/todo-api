const { getTodo } = require('../controllers/todo.controller');

const router = require('express').Router();

router.get('/', getTodo);

module.exports = router;
