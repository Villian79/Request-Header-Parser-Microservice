var express = require('express');
var app = express();

app.set('view engine', 'ejs');


app.get('/', function(req, res){
    var data = {
        software: req.headers['user-agent'],
        language: req.headers['accept-language'],
        country: req.headers['x-region'],
        ipaddress: req.headers['x-forwarded-for']
    };
    
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