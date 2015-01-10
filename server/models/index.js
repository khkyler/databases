var db = require('../db');
var mysql = require('mysql');





module.exports = {
  messages: {
    get: function (req, res) { // a function which produces all the messages

      db.connection.query('SELECT * FROM messages, users WHERE users.id = messages.u_id', function(err, rows, col){
         if(err){
          console.log("Error in get model");
         }else {
          console.log('Getting!!!!!!!!',col);
          console.log('ROWS', rows);
          res.send(rows);

         }
       });

    },
    post: function (req, res, id) {
      console.log('ID:',id);
      var message = '"'+req.body.message+'"';
      db.connection.query('INSERT INTO messages (u_id, message) VALUES ('+id+','+message+')', function(err, result){
         if(err){
          console.log("Error in post model",err);
         }else {
          res.send(result);
          // console.log('Message Result: ', result);
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
          res.send(rows)
         }
       });

    },
    post: function (req, res, isSwitchOn) { //isSwitchOn needs to be true or false (if you dont want to send, make it false)
      var username = '"'+req.body.username+'"';
      isSwitchOn = isSwitchOn || false;
      db.connection.query('INSERT INTO users (username) VALUES ('+username+')', function(err, result){
         if(err){
          console.log("Error in post model")
         }else {
          if(!isSwitchOn){
            res.send(result);
          }
         }
       });
    } // a function which can be used to insert a message into the database
  }
};

