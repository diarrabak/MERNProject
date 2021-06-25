const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const SeminarSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },

  date: {
    type: Date,
    default: Date.now,
  },
  place: {
    type: String,
    required: true,
  },
  users: [
    //a seminar has many users (presenters+authors+visitors...)
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Users",
    },
  ],
  topics: [
    ////a seminar has many topics
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Topics",
    },
  ],
  reviews: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Reviews",
    },
  ],
});


exports.SeminarSchema = SeminarSchema;