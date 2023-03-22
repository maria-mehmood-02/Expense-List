const express = require('express');
const users = require('./users_queries');
const expenses = require('./expense_queries');
const cors = require("cors");

const app = express();

app.use(express.json());

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use('/users',users);
app.use('/expenses',expenses);

app.listen(5000, () => {
  console.log('Server listening on port 5000')
})
