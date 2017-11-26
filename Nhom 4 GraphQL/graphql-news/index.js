import express from 'express';//express framework
import graphqlHTTP from 'express-graphql';//adding graphql API
import mongoose from 'mongoose';//mongodb
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var session = require('express-session')
var bodyParser = require('body-parser');

var index = require('./routes/index');
var users = require('./routes/users');

//Later import graphql
import schema from './graphql';
const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//set session
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60 * 60 * 1000 }
}))

var dbConfig = require('./config/db');
mongoose.connect('mongodb://' + dbConfig.dbuser + ':' + dbConfig.dbpassword + '@ds137441.mlab.com:37441/graphql-news');
const db = mongoose.connection
db.on('error', () => console.log('Failed to connect to DB.'))
    .once('open', () => console.log('Connected to DB. '));

// uncomment after placing your favicon in /public
// app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));



app.use('/', index);
app.use('/users', users);



// GraphQL API
app.use('/graphql', graphqlHTTP(() => ({ //Tích hợp vào Express
    schema,
    graphiql: true,//If true, presents GraphiQL when the GraphQL endpoint is loaded in a browser
    pretty: true// If true, any JSON response will be pretty-printed.
})))


// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});


var server = app.listen(process.env.PORT || 3000, () => console.log('Server started'));
