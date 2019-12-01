  
const express = require('express');
const app = express(); 
const path = require('path');
const mysql = require('mysql');
const cors = require('cors');

app.use(cors())


const sql = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'ecommerce'
});

sql.connect((err) => {
    if (err) throw new Error(`Error in SQL connection ${err}`)
    console.log('SQL connected')
})

app.get('/api/products', (req, res) => {
    sql.query('SELECT * FROM products', (err, data) => {
        if (err) throw new Error(`Error in getting products from DB - ${err}`)
        res.json(data);
    })
})

// app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname + '/client/build/index.html'));
//   // res.send(path.join(__dirname + '/client/build/index.html'))
//   });



const port = process.env.PORT || 25565;

app.listen(port, () => {
    console.log(`Listening on ${port}`)
})