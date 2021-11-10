const express = require('express');
const app = express();
require('dotenv').config();
const cors = require('cors');

// middleware
app.use(cors());
app.use(express.json());

// //API ROUTES  
app.get('/', (req, res) => {
    res.send('Ranger Bikes server is running');
});

module.exports = app;
