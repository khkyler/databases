var models = require('../models');
var bluebird = require('bluebird');
var db = require('../db');



module.exports = {
  messages: {
    get: function (req, res) {
      console.log('message:get');
      models.messages.get(req,res);
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      console.log('message:post', req.body.username)
      //check if user exists in users database
        //if they dont exist
      db.connection.query('SELECT * FROM users WHERE username = '+ "'" + req.body.username+ "'"+';',function(err, result){
        if (err){
          console.log(err);
          // console.log(result);
          // models.users.post(req,res);
          // controllers.messages.post(req,res);
        }else{
          console.log("User name already in table", result)
          if(result.length){

          console.log(result[0].id);
          models.messages.post(req,res,result[0].id);
        }else{
          //USER NOT IN DATABASE
          //add the user to users
          //grab his id
          var isSwitchOn = true;
          models.users.post(req,res, isSwitchOn);
          db.connection.query('SELECT * FROM users WHERE username = '+ "'" + req.body.username+ "'"+';',function(err, result){
            if (err){
              console.log(err);
            }else{
              models.messages.post(req,res,result[0].id);
            }
          })
          //add id + message to messages

          console.log("Here is where we want to add the user ")
        }
        }
      })
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      console.log('users:get');

      models.users.get(req,res);
    },
    post: function (req, res) {
      console.log('users:post')

      models.users.post(req,res);
    }
  }
};

