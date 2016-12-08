var express = require("express");
var path = require('path');
var fs = require('fs')
var csv = require('fast-csv');
var bodyParser = require('body-parser');
var app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
// Send the example file
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname,'public/index.html'));
});

// Fetching the object
// app.get("/", function(req, res) {
    
// });

//Writing the object

app.post("/postcounter", function(req, res) {
	console.log(req.body) 
	fs.writeFile('data/counter.csv',req.body,function (err) {
	  if (err) {
	    console.log('File either not saved or corrupted file saved.' + err);
	    res.send("Not Saved").status(500);
	  } else{
	    console.log('It\'s saved!');
	  }
	});
});

var port = process.env.PORT || 5000;

app.listen(port, function() {
  console.log("Listening on " + port);
});