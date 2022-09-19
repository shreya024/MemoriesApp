import mongoose from "mongoose";
import bcrypt from "@node-rs/bcrypt";
import crypto from "crypto";
import messageSchema from "./privateMessage";

const userSchema = new mongoose.Schema(
  {
    email: { type: String, unique: true },
    password: String,
    passwordResetToken: String,
    passwordResetExpires: Date,
    emailVerificationToken: String,
    emailVerified: Boolean,

    // // OAuth for future scope
    // facebook: String,
    // twitter: String,
    // google: String,
    // github: String,
    // tokens: Array,

    // posts array will store the post's ID of the user
    posts: {
      type: ["String"]
    },

    notifications: {
      type: ["String"]
    },

    followerCount: {
      type: Number,
      default: 0,
      required: true
    },
    followers: {
      type: [userSchema]
    },
    following: {
      type: [userSchema]
    },

    followingCount: {
      type: Number,
      default: 0,
      required: true
    },

    privateMessages: {
      content: {
        userId: {
          type: mongoose.Schema.objectId,
          ref: "User"
        },
        messages: {
          type: [messageSchema]
        }
      }
    },

    profile: {
      name: String,
      gender: String,
      location: String,
      website: String,
      picture: String
    }
  },
  { timestamps: true }
);

userSchema.pre("save", async function save(next) {
  const user = this;
  if (!user.isModified("password")) {
    return next();
  }
  try {
    user.password = await bcrypt.hash(user.password, 10);
    next();
  } catch (err) {
    next(err);
  }
});

// Method to help validate passwords
userSchema.methods.comparePassword = async function comparePassword(
  candidatePassword,
  cb
) {
  try {
    cb(null, await bcrypt.verify(candidatePassword, this.password));
  } catch (err) {
    cb(err);
  }
};

// Method to get user's gravatar(profile picture)
userSchema.methods.gravatar = function gravatar(size) {
  if (!size) {
    size = 200;
  }
  if (!this.email) {
    return `https://gravatar.com/avatar/?s=${size}&d=retro`;
  }
  const md5 = crypto.createHash("md5").update(this.email).digest("hex");
  return `https://gravatar.com/avatar/${md5}?s=${size}&d=retro`;
};

const User = mongoose.model("User", userSchema);

module.exports = User;
