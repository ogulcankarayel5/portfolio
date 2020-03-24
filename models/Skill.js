const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const User = require("./User");

const SkillSchema = new Schema({
  skillName: String,
  skillPercent: Number,
  user: {
    type: mongoose.Schema.ObjectId,
    ref: "User"
  }
});

SkillSchema.pre("save", async function(next) {
  if (!this.isModified("user")) {
    return next();
  }

  try {
    const user = await User.findById(this.user);
    
    user.skills.push(this._id);
    await user.save();
    return next();
  } catch (err) {
    return next(err);
  }
});

module.exports = mongoose.model("Skill", SkillSchema);
