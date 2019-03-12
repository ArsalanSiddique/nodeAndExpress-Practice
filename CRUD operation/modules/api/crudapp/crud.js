const mongoose = require('mongoose');

var crud = {
    title: "crudApp",
    statusCode: 200
}

mongoose.promise = global.promise;
mongoose.connect('mongodb+srv://AAs123:AAs123@ahmeddb-k3d6n.mongodb.net/test?retryWrites=true', { useNewUrlParser: true });

var myData = mongoose.Schema({
    name: {
        type: String,
        requried: true
    },
    email: {
        type: String,
        requried: true
    }
}, { collection: 'userData' });

var model = mongoose.model('userData', myData);

crud.addData = function (req, res) {
    var postBody = req.body;

    var data = {
        name: postBody.name,
        email: postBody.email
    }

    var savedData = new model(data);

    savedData.save(function (err, data1) {
        if (err) {
            res.send({
                statusCode: 500,
                message: 'Data did not insertd'
            })
        } else {
            res.send({
                statusCode: 200,
                message: 'Data Inserted Succesfully',
                data: data1
            });
        };
    });
}
crud.getData = function (req, res) {
    model.find({},function (err, data1) {
        if (err) {
            res.send({
                statusCode: 500,
                message: 'Data did not selected'
            })
        } else {
            res.send({
                statusCode: 200,
                message: 'Data selected Succesfully',
                data: data1
            });
        };
    });
}

crud.getOne = function (req, res) {
    model.find({},function (err, data1) {
        if (err) {
            res.send({
                statusCode: 500,
                message: 'Data did not selected'
            })
        } else {
            var jsonData = data1;
            jsonData.forEach(function(entry)  {
                console.log(entry.name);
            })
            // for(var i = 0; i < jsonData.length; i++) {
            //     var dataArray = jsonData[i];
            //     console.log(dataArray.name);
            //     console.log(dataArray.email);
            // }
        };
    });
}

crud.deleteData = function (req, res) {
    var id = req.params.id;
    model.findByIdAndDelete(id,function (err, data1) {
        if (err) {
            res.send({
                statusCode: 500,
                message: 'Data did not deleted'
            })
        } else {
            res.send({
                statusCode: 200,
                message: 'Data deleted Succesfully',
                data: data1
            });
        };
    });
}

crud.updateData = function (req, res) {
    
    var postBody = req.body;
    var data = {
        name: postBody.name,
        email: postBody.email
    }
    var updateId = req.params.id;
    model.findByIdAndUpdate(updateId,data,function (err, data1) {
        if (err) {
            res.send({
                statusCode: 500,
                message: 'Data did not updated'
            })
        } else {
            res.send({
                statusCode: 200,
                message: 'Data updated Succesfully',
                data: data1
            });
        };
    });
}






module.exports = crud;