var http = require("http");
var express = require("express");
var app = express();
//var ejsEngine = require("ejs-locals");
var controllers = require("./controllers");
//var flash = require("connect-flash");
// Setup the View Engine
//app.set("view engine", "jade");
//app.engine("ejs", ejsEngine); // support master pages
//app.set("view engine", "ejs"); // ejs view engine
app.set("view engine", "vash");
app.use(express.json());
//app.use(express.cookieParser());
//app.use(express.session({ secret: "encrypted data bla bla bla" }));
//app.use(flash());
//Opt into Services
app.use(express.urlencoded({ extended: true })); //handle form-encoded data and attach that to the body.


// set the public static resource folder
app.use(express.static(__dirname + "/public"));

// Map the routes
controllers.init(app);

app.get("/api/users", function (req, res) {
    res.set("Content-Type", "application/json");
    res.send({ name: "Shawn", isValid: true, group: "Admin" });
});

var server = http.createServer(app);

server.listen(3000);
