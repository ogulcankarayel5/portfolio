const express = require("express");
const router=express.Router();
const {getUser} = require("../middlewares/authorization/auth");

const {addExperience} = require("../controllers/experience");
router.post("/addExperience",getUser,addExperience);

module.exports=router;