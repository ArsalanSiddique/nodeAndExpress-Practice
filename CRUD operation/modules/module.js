const express = require('express');
const router = express.Router();
const crud = require('./api/crudapp/crud');

router.post('/add', crud.addData);
router.get('/get', crud.getData);
router.get('/getname', crud.getOne);
router.delete('/delete/:id', crud.deleteData);
router.put('/update/:id', crud.updateData);


module.exports = router;