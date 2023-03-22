const mysql = require('mysql')

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'expense_list'
});

connection.connect((err) => {
    if (err) throw err;
    console.log('Database connection established on port 3306.');
});

module.exports = connection;