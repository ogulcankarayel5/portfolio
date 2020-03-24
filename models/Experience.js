const mongoose = require("mongoose");
const User = require("../models/User");
const Schema = mongoose.Schema;

const ExperienceSchema = new Schema({
    employer:{
        type:String,
    },
    jobTitle:{
        type:String,
    },
    jobContent:{
        type:String,
    },
    user:{
        type:mongoose.Schema.ObjectId,
        ref:"User",
    }

});

ExperienceSchema.pre("save",async function(next){
    if (!this.isModified("user")) {
        return next();
      }
    
      try {
        const user = await User.findById(this.user);
       
        user.experiences.push(this._id);
        await user.save();
        return next();
      } catch (err) {
        return next(err);
      }
})

module.exports=mongoose.model("Experience",ExperienceSchema);