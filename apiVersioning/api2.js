const express = require('express')
const api = express.Router();

api.get('/', (req,res)=>{
    res.send('you jus hit the v1 root directory, fried. try /v1/time_zone or /v2/times_zones')
})

api.get('/time_zones', (req, res) => {
    res.send('WOw! new look of timezone version 2.0.0')
})
module.exports = api;