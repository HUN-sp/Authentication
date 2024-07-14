const express = require('express');
const mongoose = require('mongoose');
const app = express();
require('dotenv').config()
const productRoutes = require('./routes/productRoutes');
const userRoutes = require('./routes/userRoutes')

// Middleware to log requests
app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
});

app.use(express.json());

mongoose.connect(process.env.MONGO_URL)     
    .then(() => {
        console.log('Db connected');
    }).catch((err) => {
        console.log('Failed', err);
    });

app.use('/products', productRoutes);
app.use('/users', userRoutes);

app.listen(3000, () => {
    console.log('Server started at port no. : 3000');
});
