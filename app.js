const express = require('express');
const sequelize = require('./sequelize').getSequelizeInstance(); // connect on database when server start
const bodyParser = require('body-parser');
const http = require('http');
var app = express();
var server = http.Server(app);

app.use(bodyParser.json());

app.use('/api', require('./routes/user.routes'));

server.listen(3000, '0.0.0.0', function () {
    console.info('Express listen on *:3000');
});


module.exports.app = app;
