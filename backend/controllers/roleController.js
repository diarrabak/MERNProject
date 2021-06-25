const mongoose = require("mongoose");
const { RoleSchema } = require("../models/roleModel.js");
const Role = mongoose.model("Role", RoleSchema);

//Add the seminar to the database
function addRole(req, res) {
  let newRole = new Role(req.body);

  newRole.save((err, Role) => {
    if (err) {
      res.send(err);
    }
    res.json(Role);
  });
};

//Get all the roles in the database
function getRoles(req, res) {
  Role.find({}, (err, Role) => {
    if (err) {
      res.send(err);
    }
    console.log("test");
    res.json(Role);
  });
};

//Get roles by id
function getRoleById(req, res) {
  Role.findById(req.params.RoleId, (err, Role) => {
    if (err) {
      res.send(err);
    }
    res.json(Role);
  });
};

//Update a particular Role
function updateRole(req, res) {
  Role.findOneAndUpdate(
    { _id: req.params.RoleId },
    req.body,
    { new: true },
    (err, Role) => {
      if (err) {
        res.send(err);
      }
      res.json(Role);
    }
  );
};

//Remove a particular Role
function removeRole(req, res) {
  Role.remove({ _id: req.params.RoleId }, (err, Role) => {
    if (err) {
      res.send(err);
    }
    console.log("test");
    res.json({ message: "Successfully deleted Role" });
  });
};

exports.addRole = addRole;
exports.getRoles = getRoles;
exports.getRoleById = getRoleById;
exports.updateRole = updateRole;
exports.removeRole = removeRole;