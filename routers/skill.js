const express = require("express");
const router=express.Router();
const {getUser} = require("../middlewares/authorization/auth");

const {addSkill} = require("../controllers/skill");
router.post("/addSkill",getUser,addSkill);
module.exports=router;
