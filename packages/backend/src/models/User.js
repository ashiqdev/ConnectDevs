import mongoose from "mongoose";

const { Schema } = mongoose;

const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },

  email: {
    type: String,
    required: true,
    unique: true,
  },

  password: {
    type: String,
    required: true,
  },

  avatar: {
    type: String,
  },

  date: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model("User", UserSchema);
