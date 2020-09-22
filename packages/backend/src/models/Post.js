import mongoose from "mongoose";

const { Schema } = mongoose;

const postSchema = new Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },

  text: { type: String, required: true },

  name: { type: String },

  avatar: { type: String },

  date: { type: Date, default: Date.now },

  likes: [{ user: { type: mongoose.Schema.Types.ObjectId, ref: "User" } }],

  comments: [
    {
      user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
      text: { type: String, required: true },
      name: { type: String },
      avatar: { type: String },
      date: { type: Date, default: Date.now },
    },
  ],
});

export default mongoose.model("Post", postSchema);
