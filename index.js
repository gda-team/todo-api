const express = require('express');
const todoRoutes = require('./routes/todo.routes');

const app = express();

app.use(express.json());

app.use(todoRoutes);
app.use((res, req, next) => res.json({ message: 'hello world' }));

const PORT = process.env.PORT || 5002;

app.listen(PORT, () => console.log(`app listening on ${PORT}`));
