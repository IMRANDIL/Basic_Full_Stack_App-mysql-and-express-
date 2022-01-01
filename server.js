const express = require('express');
const cors = require('cors');
require('dotenv').config();
const app = express();
const pool = require('./db')
const PORT = process.env.PORT || 3000;
app.use(cors());


const SELECT_ALL = 'SELECT * FROM products';




app.get('/', (req, res) => {
    res.send(`<h1 style="text-align:center">Hello From Express Server</h1><a href="http://localhost:5000/products" style="background:red; padding:10px 20px; color:white; text-decoration:none; font-size:2em">Go To Products Api</a>`)
})


app.get('/products', (req, res) => {
    pool.query(SELECT_ALL, (err, result) => {
        if (err) {
            return res.send(err);
        } else {

            return res.json({
                data: result
            });


        }
    })
});


app.get('/products/add', (req, res) => {
    const { name, price } = req.query;
    const INSERT_DATA = `INSERT INTO products (name, price) VALUES('${name}','${price}')`
    pool.query(INSERT_DATA, (err, result) => {
        if (err) {
            return res.send(err);
        }
        else {
            return res.send('successfully added the data')
        }
    })
})


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})