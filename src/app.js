const express = require('express');
const usersRouter = require('./users');
const fruitsRouter = require('./fruits');

const app = express();

app.use(express.json());

app.use('/users', usersRouter);

app.use('/fruits', fruitsRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


module.exports = app;