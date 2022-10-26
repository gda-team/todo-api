const express = require('express');
const todoRoutes = require('./routes/todo.routes');


const app = express();

app.use(express.json());

app.use(todoRoutes);

app.use((req, res, next) => res.status(404).json({ message: 'not found' }));

const PORT = process.env.PORT || 5002;

app.listen(PORT, () => console.log(`app listening on ${PORT}`));
