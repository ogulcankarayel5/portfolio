const CustomError = require("../helpers/error/CustomError");
const User=require("../models/User");
//sürekli try catch kullanmamak için
const asyncErrorWrapper = require("express-async-handler");

const getUsers = asyncErrorWrapper(async (req,res,next) => {

    const user = await User.findOne({name:"Oğulcan Karayel"}).populate("experiences").populate("skills").populate("projects");
    res.status(200).json({success:true,data:user});
});

const addUser =asyncErrorWrapper(async (req,res,next) => {
    const user = await User.create({
        ...req.body
    });
    
    res.status(200).json({
        data:user
    });
    
});
module.exports = {getUsers,addUser};