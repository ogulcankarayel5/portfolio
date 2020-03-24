const express = require("express");
const router=express.Router();
const {getUser} = require("../middlewares/authorization/auth");
const {addProject} = require("../controllers/project");


router.post("/addProject",getUser,addProject);

module.exports=router;