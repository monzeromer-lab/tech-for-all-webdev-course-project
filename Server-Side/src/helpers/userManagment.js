const User = require('../modules/users');
const multer = require('multer');
const JWT = require('jsonwebtoken');

const Validition = require("../validition/bodyValidition");

/* Register Endpont */
module.exports.register = (req, res, next) => {
  Validition.test(req.body.username)
  .mustBe("" , "username isn't a String");


  bcrypt.genSalt(10, function(err, salt) {
    err ? next(err) :
    bcrypt.hash(req.body.password, salt, function(err, hash) {
    err ? next(err) : 
    User.create({
    username: req.body.username,
    email: req.body.email,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    password: hash
  });
    });
});
  

  res.status(200).json({error : false , message : "success!" , data : []});
};

/* Login Endpoint */
module.exports.login = (req, res, next) => {
  res.status(200).json({error : false , message : "success!" , data : []});
};