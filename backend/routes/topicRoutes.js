/* This file dictates what happens when someone routes to the restaurants api = what is the request and how is it handled? */
const express = require("express") 
const TopicsCtrl = require("../controllers/topiccontroller.js").TopicsController

const router = express.Router()

/* Get all topics */
router.route("/topics").get(TopicsCtrl.getTopics)
/* Get topics by id */
router.route("/topics/id/:id").get(TopicsCtrl.getTopicsById)


/* Create, Update, Delete Requests to /topic */
router
    .route("/topics")
    .post(TopicsCtrl.postTopic)
    .put(TopicsCtrl.updateTopic)
    .delete(TopicsCtrl.deleteTopic)

module.exports = router
