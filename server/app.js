/**
 * Created by acoelho on 1/9/16.
 */
// app.js in this case is often named server.js

var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var index = require('./routes/index');
var path = require('path');

app.use(express.static(path.join(__dirname, './public')));
//bodyParser goes always above your routes
app.use(bodyParser.json());

app.use('/', index);


module.exports = app;

var server = app.listen(3000, function(){
    var port = server.address().port;
    console.log('Listening on port:', port);
});

//Code bellow now lives on index.js

//app.get('/', function(request,response){
//    response.send('Hello Living Skeleton!');
//});