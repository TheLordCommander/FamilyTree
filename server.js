var express = require('express');
var app = express(); 					
var mongoose = require('mongoose'); 	
var port = process.env.OPENSHIFT_NODEJS_PORT || 1000
var server_ip_address = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1'

var bodyParser = require('body-parser');
var methodOverride = require('method-override');

var connection_string = "mongodb://localhost:27017/familytree";
//mongoose.connect(connection_string);

app.use(express.static('./app'));
app.use(bodyParser.urlencoded({'extended': 'true'})); // standard--Pls learn more google 
app.use(bodyParser.json()); // parse application/json
app.use(bodyParser.json({type: 'application/vnd.api+json'})); //No Idea- parse application/vnd.api+json as json
app.use(methodOverride('X-HTTP-Method-Override')); // Learn More - override with the X-HTTP-Method-Override header in the request

require('./NEConfig/routes.js')(app);
 
app.listen(port, server_ip_address,function () {
  console.log( "Listening on " +server_ip_address, ", server_port " + port )
});		
