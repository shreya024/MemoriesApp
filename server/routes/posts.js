import express from "express";
import {
  getPosts,
  createPost,
  updatePost,
  getPost,
  deletePost,
  likePost,
} from "../controllers/posts.js";

const router = express.Router();

//http://localhost:5000/posts
router.get("/", getPosts);
router.post("/", createPost);
router.get("/:id", getPost);
router.patch("/:id", updatePost);
router.delete("/:id", deletePost);
router.patch("/:id/likePost", likePost);
export default router;
