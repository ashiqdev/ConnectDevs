import { check, validationResult } from "express-validator";
import mongoose from "mongoose";
import auth from "../../middleware/auth";

const User = mongoose.model("User");
const Post = mongoose.model("Post");

const express = require("express");

const router = express.Router();

// @route  POST api/posts
// @desc   Create a post
// @access Private

router.post(
  "/",
  [auth, [check("text", "Text is required").not().isEmpty()]],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { text } = req.body;

    try {
      const user = await User.findOne({ _id: req.user.id }).select("-password");
      const newPost = {
        text,
        name: user.name,
        avatar: user.avatar,
        user: req.user.id,
      };

      const post = await new Post(newPost);
      await post.save();

      res.json(post);
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Server Error");
    }
  }
);

// @route  GET api/posts
// @desc   Create all posts
// @access Private

router.get("/", auth, async (req, res) => {
  try {
    const posts = await Post.find().sort({ date: -1 });
    res.json(posts);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
});

// @route  GET api/posts/:postId
// @desc   Get Post by id
// @access Private

router.get("/:postId", auth, async (req, res) => {
  const { postId } = req.params;
  try {
    const post = await Post.findOne({ _id: postId });

    if (!post) return res.status(404).json({ msg: "Post not found" });

    res.send(post);
  } catch (error) {
    console.error(error.message);

    if (error.kind === "ObjectId") {
      return res.status(404).json({ msg: "Post not found" });
    }
    res.status(500).send("Server Error");
  }
});

// @route  DELETE api/posts/:postId
// @desc   Delete a post
// @access Private

router.delete("/:postId", auth, async (req, res) => {
  try {
    const post = await Post.findOne({ _id: req.params.postId });

    if (!post) return res.status(404).json({ msg: "Post not found" });

    //   make sure the current user owns the post
    if (req.user.id.toString() !== post.user.toString()) {
      return res.status(401).json({ msg: "User not authorized" });
    }

    await post.remove();

    res.json({ msg: "Post removed" });
  } catch (error) {
    console.error(error.message);
    if (error.kind === "ObjectId") {
      return res.status(404).json({ msg: "Post not found" });
    }
    res.status(500).send("Server Error");
  }
});

// @route  DELETE api/posts/like/:postId
// @desc   Like a post
// @access Private

router.put("/like/:postId", auth, async (req, res) => {
  try {
    const post = await Post.findOne({ _id: req.params.postId });
    // check the post has already been liked by current user
    if (
      post.likes.filter(
        (like) => like.user.toString() === req.user.id.toString()
      ).length > 0
    ) {
      return res.status(400).json({ msg: "Post already liked" });
    }

    post.likes.unshift({ user: req.user.id });

    await post.save();

    res.json(post.likes);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
});

// @route  PUT api/posts/unlike/:postId
// @desc   Unlike a post
// @access Private

router.put("/unlike/:postId", auth, async (req, res) => {
  try {
    const post = await Post.findOne({ _id: req.params.postId });
    // check the post has already been liked by current user
    if (
      post.likes.filter(
        (like) => like.user.toString() === req.user.id.toString()
      ).length === 0
    ) {
      return res.status(400).json({ msg: "Post has not yet been liked" });
    }

    const removeIndex = post.likes
      .map((like) => like.user.toString())
      .indexOf(req.user.id.toString());

    post.likes.splice(removeIndex, 1);

    await post.save();

    res.json(post.likes);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
});

// @route  POST api/posts/comment/:postId
// @desc   Add a comment on a post
// @access Private

router.post(
  "/comment/:postId",
  [auth, [check("text", "Text is required").not().isEmpty()]],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const user = await User.findOne({ _id: req.user.id }).select("-password");
      const post = await Post.findOne({ _id: req.params.postId });

      const newComment = {
        text: req.body.text,
        name: user.name,
        avatar: user.avatar,
        user: req.user.id,
      };

      post.comments.unshift(newComment);
      await post.save();

      res.json(post.comments);
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Server Error");
    }
  }
);

// @route  POST api/posts/comment/:postId/:commentId
// @desc   Delete a comment from a post
// @access Private

router.delete("/comment/:postId/:commentId", auth, async (req, res) => {
  try {
    const post = await Post.findOne({ _id: req.params.postId });
    // Pull out comment
    const comment = post.comments.find((c) => c.id === req.params.commentId);

    if (!comment) {
      return res.status(404).json({ msg: "Comment does not exist" });
    }

    //  check User
    if (comment.user.toString() !== req.user.id.toString()) {
      return res.status(401).json({ msg: "User not authorized" });
    }

    const removeIndex = post.comments
      .map((c) => c.user.toString())
      .indexOf(req.user.id.toString());

    post.comments.splice(removeIndex, 1);

    await post.save();

    res.json(post.comments);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
});

export default router;
