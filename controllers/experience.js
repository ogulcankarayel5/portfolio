const Experience = require("../models/Experience");
const User = require("../models/User");
//sürekli try catch kullanmamak için
const asyncErrorWrapper = require("express-async-handler");

const addExperience = asyncErrorWrapper(async (req,res,next) => {

    const {employer,jobTitle,jobContent} = req.body;
    
    const experience = await Experience.create({
        employer,
        jobContent,
        jobTitle,
        user:req.user._id
    });

    res.status(200).json({success:true,data:experience});
});

module.exports={addExperience};