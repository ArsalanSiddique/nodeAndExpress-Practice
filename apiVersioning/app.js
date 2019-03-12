const express = require('express');
const apiV1 = require('./api1');
const apiv2 = require('./api2');
const app = express();

app.use('/v1', apiV1); //version 1.0.0 of my API
app.use('/v2', apiv2); //version 2.0.0 of my API

app.get('/', (req, res)=>{
    res.send('you just hit the root directory, friend. Try /v1 or /v2')
})


app.listen(3000, ()=>{
    console.log('App is running on port 3000')
})