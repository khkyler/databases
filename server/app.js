var express = require('express');
var db = require('./db').connection;
db.connect(function(err){
  console.log(err)
});

// Middleware
var morgan = require('morgan');
var parser = require('body-parser');

// Router
var router = require('./routes.js');
// var handler = require('./request-handler.js');
var model = require('./models')
var cors = require('cors');

var app = express();
module.exports.app = app;

// Set what we are listening on.
app.set("port", 3000);

// Logging and parsing
app.use(cors());
app.use(morgan('dev'));
app.use(parser.json());

// Set up our routes
app.use("/classes", router);

// Serve the client files
app.use(express.static(__dirname + "/../client"));

// If we are being run directly, run the server.
if (!module.parent) {
  app.listen(app.get("port"));
  console.log("Listening on", app.get("port"));
}
// app.get('/', function(request, response){
//   model.messages.get(request, response);
// });
// app.post('/', function(request, response){
//   model.messages.post(request, response);
// });

// app.get('/classes/messages', function(req, res){
//   console.log("get working");
//   model.messages.get(req, res);
//   // app.send();
// });

// app.post('/classes/messages', function(req, res){
//   console.log("post working");
//   model.messages.post(req, res);
//   // app.send("success");
// });
