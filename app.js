const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));
const app = express();
// this is how we calling different routes using express.
app.use('/properties',(req, res, next) => {
    console.log('Another the middleware!');
    res.send('<h1>Property list!</h1>');
});
//middleware is a function that gets executed for every incoming request.
app.get('/', (req, res, next) => { 
    res.send('<h1>Home page!</h1>');
});
app.listen(3000);
