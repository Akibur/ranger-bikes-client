const express = require('express');
const app = express();
require('dotenv').config();
const cors = require('cors');

// middleware
app.use(cors());
app.use(express.json());

//API ROUTES

//Tours Route
// app.use('/categories', require('./Routes/Category.route'));
// app.use('/orders', require('./Routes/Order.route'));

app.get('/', (req, res) => {
    res.send('Ranger Bikes server is running');
});

module.exports = app;
