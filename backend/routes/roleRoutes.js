const express = require("express");
const router = express.Router();
const roleController = require("../controllers/roleController.js");

router.get("/roles", roleController.getRoles);

router.post("/roles", roleController.addRole);

router.post("role/:RoleId", roleController.getRoleById);

router.put("role/:RoleId", roleController.updateRole);

router.delete("role/:RoleId", roleController.removeRole);

module.exports = router;
