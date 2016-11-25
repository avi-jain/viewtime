var express = require("express");
var path = require('path');
var app = express();

// Send the example file
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname,'index.html'))
});

// Fetching the object
// app.get("/", function(req, res) {
    
// });

// Sending the object
// app.post("/", function(req, res) { 
// 	
// });

var port = process.env.PORT || 5000;

app.listen(port, function() {
  console.log("Listening on " + port);
});