/**
 * Created by acoelho on 1/9/16.
 */
var express = require('express');
var router = express.Router();
var path = require('path');
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/basic_walking_skeleton');
var Cat = mongoose.model('Cat', {name:String});

router.post('/add', function(request, response, next){
    var kitty = new Cat({name: request.body.name});
    kitty.save(function(err){
        if(err)console.log('meow %s', err);
        response.send(kitty.toJSON());
        next();
    });
});

router.get('/cats', function(request, response, next){
    return Cat.find({}).exec(function(err, cats){
        if(err)throw new Error(err);
        response.send(JSON.stringify(cats));
        next();
    });
});

router.get('/', function(request,response, next){

    //Should var file be also commented out??
    var file = request.params[0] || 'views/index.html';
    response.sendFile(path.join(__dirname, '../public/views/index.html'));

    //why does the line bellow takes precedent on the DOM as opposed to the one above??
    //response.send('Hello Skeletons Living in Routes!');
    //next();
});



module.exports = router;