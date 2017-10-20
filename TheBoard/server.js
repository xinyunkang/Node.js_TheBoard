'use strict';
var http = require('http');
var express = require("express");
var app = express();
var port = process.env.PORT || 3000;
//var ejsEngine = require("ejs-locals");
//setup the view engine
//app.set("view engine", "jade");
//app.engine("ejs", ejsEngine); //support master pages
//app.set("view engine", "ejs");
app.set("view engine", "vash");

//set the public static resource folder
app.use(express.static(__dirname + "/public"));

//map the routes
controllers.init(app);

var server = http.createServer(app);
server.listen(port);