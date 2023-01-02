const express = require('express');
const router = express.Router();

const todosRouter = require('./todosRouter');
router.use('/todos', todosRouter)

/* GET home page. */
router.get('/', function(req, res, next) {
  try {
    res.status(200).json({data: 'Home Page'});
  }catch (e) {
    next(e);
  }
});



module.exports = router;
