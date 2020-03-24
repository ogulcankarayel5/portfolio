const Skill = require("../models/Skill");
const User = require("../models/User");
//sürekli try catch kullanmamak için
const asyncErrorWrapper = require("express-async-handler");

const addSkill = asyncErrorWrapper(async (req, res, next) => {
  const { skillName, skillPercent } = req.body;

 
  const skill = await Skill.create({
    skillName,
    skillPercent,
    user: req.user._id
  });

  return res.status(200).json({ success: true, data: skill });
});

module.exports = { addSkill };
