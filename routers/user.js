const express = require("express");
const router=express.Router();

const {getUsers,addUser} = require("../controllers/user");

router.get("/",getUsers);
router.post("/addUser",addUser);


module.exports=router;