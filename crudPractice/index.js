const express = require('express');
const path = require('path');
const logger = require('morgan');
const bodyParser = require('body-parser');
const http = require('http');
const mongoose = require('mongoose');

const app = new express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(logger('dev'));

mongoose.Promise = global.Promise;
const dburi = 'mongodb+srv://AAs123:AAs123@ahmeddb-k3d6n.mongodb.net/test?retryWrites=true';
mongoose.connect(dburi, { useNewUrlParser: true })
    .catch((err) => {
        console.log('error occured', err);
    });

//============== mongoose events ==============


mongoose.connection.on('connected', () => {
    console.log('App is connected with database.');
})

mongoose.connection.on('disconnected', () => {
    console.log('App disconnected with database.');
    process.exit(1);
})

mongoose.connection.on('error', (err) => {
    console.log('caught an error.', err);
    process.exit(1);
})

mongoose.connection.on('SIGINT', () => {
    console.log('App is terminating');
    mongoose.connection.close(() => {
        console.log('Database connection closed.');
    })
    process.exit(0);
})

var userDetail = new mongoose.Schema({

    name: { type: String, required: true },
    email: { type: String, required: true },
    joinDate: { type: Date, default: Date.now },
    isActive: { type: Boolean, default: true }

}, { collection: 'userInfo' });

var model = new mongoose.model('userInfo', userDetail);

app.get('/', (req, res) => {
    res.send('You just send a get request, Friend');
})

app.post('/add', (req, res) => {

    var postBody = req.body;
    var data = {
        name: postBody.name,
        email: postBody.email,
    }

    var saveData = new model(data);
    saveData.save((err, mydata) => {
        if (err) {
            res.send({
                statusCode: 500,
                message: 'caught an error, Data did not inserted successfuly.'
            })
            console.log(err);
        } else {
            res.send({
                statusCode: 200,
                message: 'Data inserted successfuly.',
                data: mydata
            })
        }
    })

})

app.get('/users', (req, res) => {

    model.find({},(err, mydata) => {
        if (err) {
            res.send({
                statusCode: 500,
                message: 'caught an error, Data did not get successfuly.'
            })
            console.log(err);
        } else {
            res.send({
                statusCode: 200,
                message: 'Data get successfuly.',
                data: mydata
            })
        }
    })

})

app.get('/user/:name', (req, res) => {
    var userName = req.params.name;
    model.find({name: userName},(err, mydata) => {
        if (err) {
            res.send({
                statusCode: 500,
                message: 'caught an error, Data did not get successfuly.'
            })
            console.log(err);
        } else {
            res.send({
                statusCode: 200,
                message: 'Data get successfuly.',
                data: mydata
            })
        }
    })

})

app.delete('/user/:name', (req, res) => {
    var userName = req.params.name;
    model.find({name: userName}).remove((err, mydata) => {
        if (err) {
            res.send({
                statusCode: 500,
                message: 'caught an error, Data did not deleted successfuly.'
            })
            console.log(err);
        } else {
            res.send({
                statusCode: 200,
                message: 'Data deleted successfuly.',
                data: mydata
            })
        }
    })
})

app.listen(3000, () => {
    console.log('App is running on port 3000');
})