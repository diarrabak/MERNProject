const express = require("express");
const router = express.Router();
const reviewController = require("../controllers/reviewController.js");

router.get("/reviews", reviewController.getReviews);
router.post("/review/:ReviewId", reviewController.addReview);

// const routes = (app) => {
//   app.route("/reviews").get(getReviews).post(addReview);

//   app
//     .route("/review/:ReviewId")
//     .get(getReviewById)
//     .put(updateReview)
//     .delete(removeReview);
// };

module.exports = router;

// export default routes;
