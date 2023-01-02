const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const {connectDB} = require("./loaders");
const dotenv = require('dotenv');
dotenv.config();

const app = express();

// Routes
const indexRouter = require('./routes/indexRouter');

(async ()=>{
    await connectDB();
})();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/api/v1', indexRouter);

module.exports = app;
