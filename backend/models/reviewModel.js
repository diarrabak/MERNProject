const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ReviewSchema = new Schema({
  comment: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  userid: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

exports.ReviewSchema = ReviewSchema;