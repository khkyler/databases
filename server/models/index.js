var db = require('../db');
var mysql = require('mysql');





module.exports = {
  messages: {
    get: function (req, res) { // a function which produces all the messages

      db.connection.query('SELECT * FROM messages', function(err, rows, columns){
         if(err){
          console.log("Error in get model");
         }else {
          console.log('Getting!!!!!!!!');
          // console.log('ROWS', );

         }
       });

    },
    post: function (req, res) {
      console.log(req.body.message);
      var message = '"'+req.body.message+'"';
      db.connection.query('INSERT INTO messages (message) VALUES ('+message+')', function(err, result){
         if(err){
          console.log("Error in post model")
         }else {
          console.log('Message Result: ', result);
         }
       });
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function (req, res) { // a function which produces all the messages

      db.connection.query('SELECT * FROM users', function(err, rows, columns){
         if(err){
          console.log("Error in get model")
         }else {
          console.log('ROWS', rows);
          console.log("Col", columns);
         }
       });

    },
    post: function (req, res) {
      var username = '"'+req.body.username+'"'
      db.connection.query('INSERT INTO users (username) VALUES ('+username+')', function(err, result){
         if(err){
          console.log("Error in post model")
         }else {
          console.log('User Result: ', result);
         }
       });
    } // a function which can be used to insert a message into the database
  }
};

