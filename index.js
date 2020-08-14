var express = require("express");
var bodyParser = require('body-parser');
var app = express();

var routes = require("./routes.js");

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    next();
});
routes(app);

app.listen(3000, () => {
    console.log("Server running on port 3000");
});