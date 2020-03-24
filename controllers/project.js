const Project = require("../models/Project");
const User = require("../models/User");
//sürekli try catch kullanmamak için
const asyncErrorWrapper = require("express-async-handler");

const addProject = asyncErrorWrapper(async (req,res,next) => {

    const {title,content,sourceLink,technologies} = req.body;
   
    const project = await Project.create({
        title,
        content,
        sourceLink,
        technologies,
        user:req.user._id
    });

    res.status(200).json({success:true,data:project});
})

module.exports={addProject};