// const Post = require('../models/Post')

// exports.createPost = async (req, res) => {
//   try {
//     const post = await Post.create({
//       title: req.body.title,
//       content: req.body.content,
//       user: req.user.id
//     });
//     res.status(200).json(post)
//   } catch (error) {
//     res.status(404).json({ message: 'Invalid post data' })
//   }
// };

const Post = require("../models/Post");

exports.createPost = async (req, res) => {
  try {
    const { title, content } = req.body;

    // Create Post
    const post = await Post.create({
      title,
      content,
      user: req.user.id, // Link to the authenticated user
    });

    res.status(201).json(post);
  } catch (error) {
    console.error("Error creating post:", error);
    res.status(500).json({ message: "Server error" });
  }
};

console.log("createPost defined:", typeof exports.createPost);