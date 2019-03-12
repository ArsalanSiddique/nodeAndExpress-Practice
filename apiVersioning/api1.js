var express = require('express');
const api = express.Router();

api.get('/', (req, res)=>{
    res.send('you jus hit the v1 root directory, fried. try /v1/time_zone or /v2/times_zones')
})

api.get('/time_zone', (req, res) => {
    res.send('it is v1 of API timezone')
})

api.get('/time_zones', (req, res) => {
    res.send('it is v1 of API timezones')
})

module.exports = api;