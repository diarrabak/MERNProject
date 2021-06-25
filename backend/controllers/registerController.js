const mongoose = require("mongoose");
const { UserSchema } = require("../models/userModel.js");
const User = mongoose.model("User", UserSchema);

//Add the seminar to the database
function addUser(req, res) {
  let newUser = new User(req.body);

  newUser.save((err, User) => {
    if (err) {
      res.send(err);
    }
    res.json(User);
  });
};

//Get all the Users in the database
function getUsers(req, res) {
  User.find({}, (err, User) => {
    if (err) {
      res.send(err);
    }
    res.json(User);
  });
};

//Get Users by id
function getUserById(req, res) {
  User.findById(req.params.UserId, (err, User) => {
    if (err) {
      res.send(err);
    }
    res.json(User);
  });
};

//Update a particular User
function updateUser(req, res) {
  User.findOneAndUpdate(
    { _id: req.params.UserId },
    req.body,
    { new: true },
    (err, User) => {
      if (err) {
        res.send(err);
      }
      res.json(User);
    }
  );
};

//Remove a particular User
function removeUser(req, res) {
  User.remove({ _id: req.params.UserId }, (err, User) => {
    if (err) {
      res.send(err);
    }
    //console.log("test");
    res.json({ message: "Successfully deleted User" });
  });
};

exports.addUser = addUser;
exports.getUsers = getUsers;
exports.getUserById = getUserById;
exports.updateUser = updateUser;
exports.removeUser = removeUser;