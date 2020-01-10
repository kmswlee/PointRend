const express = require('express');
const image = require('express-image');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./routes/index');
const resultRouter = require('./routes/result');
const evaluationRouter = require('./routes/evaluation');

const app = express();
app.use(cors())
console.log(path.join(__dirname, 'public'))
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// console.lo
app.use('/imgs', image('/workspace/output/'));

app.use('/', indexRouter);
app.use('/result', resultRouter);
app.use('/eval', evaluationRouter);

const server = app.listen(80, () => {
});

module.exports = app;
