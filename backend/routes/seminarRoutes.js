const express = require("express");
const router = express.Router();
const seminarController = require("../controllers/seminarControllers.js");

router.get("/seminars", seminarController.getSeminars);

router.post("/seminars", seminarController.addSeminar);

router.get('/seminar/:SeminarId', seminarController.getSeminarById);

router.put('/seminar/:SeminarId', seminarController.updateSeminar);

router.delete('/seminar/:SeminarId', seminarController.removeSeminar);

module.exports = router;