const express = require("express");

const router = express.Router();
const user = require("./user");
const skill = require("./skill");
const project = require("./project");
const experience = require("./experience");


router.use("/users", user);
router.use("/skills",skill);
router.use("/projects",project);
router.use("/experiences",experience);
module.exports = router;
