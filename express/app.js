var express = require("express");
var config  = require("config");
var bodyParser = require("body-parser");

var app = express();
var controllers = require(__dirname + "/apps/controllers");

app.use(controllers);
app.use(bodyParser.json());

app.set("views" , __dirname + "/apps/views");
app.set("view engine" , "ejs");

var host = config.get("server.host");
var port = config.get("server.port");

app.listen(port , function(){
    console.log("server is running on port" , port);
})