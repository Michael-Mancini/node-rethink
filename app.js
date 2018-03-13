const express = require('express');
const bodyParser = require('body-parser');

var app = express();
var http = require('http').Server(app);
var db = require('./models/db');

var dbModel = new db();
dbModel.setupDb();

app.use(bodyParser.json());
app.use(require('./controllers'));

http.listen(3000, () => {
    console.log('Server started on port 3000');
});