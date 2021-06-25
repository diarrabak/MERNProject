const mongoose = require("mongoose");
const { ReviewSchema } = require("../models/reviewModel.js");
const Review = mongoose.model("Review", ReviewSchema);

// import mongoose from "mongoose";
// import { ReviewSchema } from "../models/reviewModel.js";

//Add the seminar to the database
function addReview(req, res) {
  let newReview = new Review(req.body);

  newReview.save((err, Review) => {
    if (err) {
      res.send(err);
    }
    res.json(Review);
  });
}

//Get all the reviews in the database
function getReviews(req, res) {
  Review.find({}, (err, Review) => {
    if (err) {
      res.send(err);
    }
    res.json(Review);
  });
};

//Get reviews by id
function getReviewById(req, res) {
  Review.findById(req.params.ReviewId, (err, Review) => {
    if (err) {
      res.send(err);
    }
    res.json(Review);
  });
}

//Update a particular Review
function updateReview(req, res) {
  Review.findOneAndUpdate(
    { _id: req.params.ReviewId },
    req.body,
    { new: true },
    (err, Review) => {
      if (err) {
        res.send(err);
      }
      res.json(Review);
    }
  );
};

//Remove a particular Review
function removeReview(req, res) {
  Review.remove({ _id: req.params.ReviewId }, (err, Review) => {
    if (err) {
      res.send(err);
    }
    res.json({ message: "Successfully deleted review" });
  });
};

exports.addReview = addReview;
exports.getReviews = getReviews;
exports.getReviewById = getReviewById;
exports.updateReview = updateReview;
exports.removeReview = removeReview;