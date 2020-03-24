const CustomError = require('../../helpers/error/CustomError');
const asyncErrorWrapper = require("express-async-handler");
const User = require('../../models/User');

const getUser =asyncErrorWrapper(async (req,res,next) => {
    const user = await User.findOne({name:"Oğulcan Karayel"});
    
    req.user=user;
   
   return next();
});

module.exports={getUser};