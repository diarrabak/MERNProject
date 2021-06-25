const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController.js");

router.get("/Users", userController.getUsers);

router.post("/Users", userController.addUser);

router.get("/Users/:UserId", userController.getUserById);

router.put("/Users/:UserId", userController.updateUser);

router.delete("/Users/:UserId", userController.removeUser);

router.post("/Login", userController.loginUser);
module.exports = router;
