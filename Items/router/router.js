const express = require('express');
const router = express.Router();
const controller = require('../controller/controller')

router.post('/create', controller.createCategory)
router.get('/all', controller.getAll)
router.delete('/removeCategory', controller.delete)
router.post('/createItem', controller.addItem)
router.delete('/removeItem', controller.deleteItem)
module.exports = router;