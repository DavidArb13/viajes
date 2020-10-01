const mysql = require('mysql');

const mysqlConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'trips'
});

mysqlConnection.connect((err) => {
    if (err) throw err;
    console.log('DB is connected');
});

module.exports = mysqlConnection;