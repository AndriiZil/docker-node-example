'use strict';

const express = require('express');
const morgan = require('morgan');

// Constants
const PORT = 8080;

// App
const app = express();
app.use(morgan('dev'));

app.get('/', (req, res) => {
    res.send('Hello Alina');
});

app.listen(PORT, () => console.log('Server stared'));