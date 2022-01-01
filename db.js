const mysql = require('mysql');
require('dotenv').config()


const pool = mysql.createPool({
    connectionLimit: 100, //important
    host: 'localhost',
    user: 'admin',
    password: process.env.PASS,
    database: 'Basic_App',
    debug: false
});




// const connection = mysql.createConnection({
//     'host': 'localhost',
//     'user': 'admin',
//     'password': process.env.PASS,
//     'database': 'Basic_App'
// });



module.exports = pool;

