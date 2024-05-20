const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({extended: false}));
//middleware is a function that gets executed for every incoming request.
app.get('/', (req, res, next) => {
    res.send('<h1>Home page!</h1>');
});
app.post('/properties', (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
    res.send('<h1>Property added!</h1>');
 });
app.listen(3000);
