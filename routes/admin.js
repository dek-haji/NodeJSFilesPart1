const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: false }));
router.get('/properties', (req, res, next) => {
    res.send('<form><input type="text" name="title"><button type="submit">Add Property</button></form>');
});