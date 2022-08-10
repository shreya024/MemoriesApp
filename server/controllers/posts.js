import express from "express";
import mongoose from "mongoose";

import PostMessage from "../models/postMessage.js";

const router = express.Router();

export const getPosts = async (req, res) => {
  const { page } = req.query;

  if (!page || page <= 0)
    res.status(406).json({ message: "Params `page` should be > 0" });

  try {
    const LIMIT = 4;
    const startIndex = (Number(page) - 1) * LIMIT;
    const total = await PostMessage.countDocuments({});
    const posts = await PostMessage.find()
      .sort({ _id: -1 })
      .limit(LIMIT)
      .skip(startIndex);

    res
      .status(200)
      .json({
        data: posts,
        currentPage: Number(page),
        numberOfPages: Math.ceil(total / LIMIT),
      });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getPostsBySearch = async (req, res) => {
  let { searchQuery, tags } = req.query;

  if (!tags)
    return res.status(404).json({ error: "Params `tags` is required" });

  try {
    const title = new RegExp(searchQuery, "i");
    const posts = await PostMessage.find({
      $or: [{ title }, { tags: { $in: tags.split(",") } }],
    });


    if(!posts.length)
     return res.status(404).json({message:"No posts found"});
    res.status(200).json({ data: posts });
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

export const getPost = async (req, res) => {
  const { id } = req.params;

  try {
    const post = await PostMessage.findById(id);

    if (!post) {
      res.status(404).json({ message: "No Post by this Id exists" });
      return;
    }

    res.status(200).json(post);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createPost = async (req, res) => {
  const { title, message, selectedFile, creator, tags } = req.body;

  try {
    const newPostMessage = new PostMessage({
      title,
      message,
      selectedFile,
      creator,
      tags,
    });
    await newPostMessage.save();

    res.status(201).json(newPostMessage);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const updatePost = async (req, res) => {
  const { id } = req.params;
  if (!id) {
    res.status(406).json({ error: "Params `id` is required" });
    return;
  }
  const { title, message, creator, selectedFile, tags } = req.body;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`Incorrect format for id: ${id}`);

  try {
    const updatedPost = { creator, title, message, tags, selectedFile, _id: id };


    if (!(await PostMessage.findById(id))) {
      res.status(404).json({ error: "No post of any such id exists" });
      return;
    }
    await PostMessage.findByIdAndUpdate(id, updatedPost, { new: true });

    res.status(200).json(updatedPost);
  } catch (error) {
    res.status(404).json({ error: error });
  }

};

export const deletePost = async (req, res) => {
  const { id } = req.params;

  if (!id) {
    return res.status(406).json({ error: "Missing parameter `id`" })
  }

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`Incorrect format for id: ${id}`);


  if (!(await PostMessage.findById(id))) {
    return res.status(404).json({ error: "No post of any such id exists" });;
  }
  await PostMessage.findByIdAndRemove(id);

  res.status(200).json({ message: "Post deleted successfully." });
};

export const likePost = async (req, res) => {
  const { id } = req.params;

  if (!id)
    return res.status(406).json({ error: "Params `id` is required" });

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`Incorrect format for id: ${id}`);

  const post = await PostMessage.findById(id);
  if (!post)
    return res.status(404).json({ error: "No post of this id exists" });

  try {
    const updatedPost = await PostMessage.findByIdAndUpdate(
      id,
      { likeCount: post.likeCount + 1 },
      { new: true }
    );

    res.status(200).json(updatedPost);
  } catch (error) {
    res.status(404).json({ message: error.message })
  }

};

export default router;
