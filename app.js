var express = require('express');
var app = express();

app.set('view engine', 'ejs');


app.get('/', function(req, res){
    var data = {
        software: req.headers['user-agent'],
        language: req.headers['accept-language'],
        ipaddress: req.headers['x-forwarded-for'],
        country: req.headers['x-region']
    };
    //res.render('home', {data: data});
    console.log(req.headers);
    res.send(data);
    
});


app.listen(process.env.PORT, process.env.IP, function(err){
    if(err){
        console.log('could not connect to the server');
    }
    else{
        console.log('Server is listening to PORT: ' + process.env.PORT);
    }
});