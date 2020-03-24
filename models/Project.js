const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const User = require("./User");

const TechnologySchema = new Schema({
  name:String,
});

module.exports = mongoose.model("Technology",TechnologySchema);


const ProjectSchema = new Schema({
  title: String,
  content: String,
  technologies: [
    TechnologySchema
  ],
  sourceLink:String,
  user: {
    type: mongoose.Schema.ObjectId,
    ref: "User"
  }
});

ProjectSchema.pre("save", async function(next) {
  if (!this.isModified("user")) {
    return next();
  }

  try {
    
    const user = await User.findById(this.user);
    
    user.projects.push(this._id);
    await user.save();
    return next();
  } catch (err) {
    return next(err);
  }
});

module.exports = mongoose.model("Project",ProjectSchema);
