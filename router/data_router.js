const express = require('express');
const dataController = require('../controller/data_controller');

const router = express.Router();

// Routes
router.get('/', dataController.getAllData);
router.get('/timestamp', dataController.getDataByTimestampSandwich);
router.get('/:id', dataController.getDataById);
router.post('/', dataController.createData);
router.put('/:id', dataController.updateDataById);
router.delete('/:id', dataController.deleteDataById);

module.exports = router;
