const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const RoleSchema = new Schema({
  role: {
    type: String,
    required: true,
  }
});

exports.RoleSchema = RoleSchema;