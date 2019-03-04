const express = require('express');
const path = require('path');
const logger = require('morgan');
const bodyParser = require('body-parser');

const app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

var api = require('./modules/module');

app.use('/api', api);


app.listen(3000, ()=> {
    console.log('app is running on port 3000');
});