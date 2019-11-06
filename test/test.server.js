var express = require('express');
var app =  express();
var corp = require('cors');

app.use(corp());

app.disable('x-powered-by');

app.get('/', function (req, res) {
    res.json({ data:"work" ,  reponse: req.query  });
    console.log('log into root server');
});

app.listen(3150, function () {
    console.log("Server is online on port 3150");
});