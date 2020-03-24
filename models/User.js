const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema(
  {
    name: {
      type: String
    },
    email: {
      type: String,
      unique: true,
      match: [
        /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/,
        "Please provide a valid email"
      ]
    },
    phone: {
      type: String,
      unique: true
    },
    about: {
      type: String
    },
    experiences: [
      {
        type: mongoose.Schema.ObjectId,
        ref: "Experience"
      }
    ],
    skills: [
      {
        type: mongoose.Schema.ObjectId,
        ref: "Skill"
      }
    ],
    projects: [
      {
        type: mongoose.Schema.ObjectId,
        ref: "Project"
      }
    ]
  },
  { timestamps: { createdAt: "created_at", updatedAt: "updated_at" } }
);

module.exports = mongoose.model("User", UserSchema);
