const express = require('express');
const {TodosController} = require("../controllers");
const router = express.Router();

/* GET users listing. */
router.get('/', TodosController.getAll);
router.get('/:id', TodosController.getOne);
router.delete('/:id', TodosController.delete);
router.patch('/:id', TodosController.update);
router.post('/create', TodosController.create);

module.exports = router;
