import express from "express";
import {
  getPosts,
  createPost,
  updatePost,
  getPost,
  deletePost,
  likePost,
  getPostsBySearch,
  bookmarkPost,
  getBookMarkedPosts,
} from "../controllers/posts.js";

const router = express.Router();

//http://localhost:5000/posts
router.get("/search", getPostsBySearch);
router.get("/", getPosts);
router.post("/", createPost);
router.get('/bookmarks/',getBookMarkedPosts);
router.get("/:id", getPost);
router.patch("/:id", updatePost);
router.delete("/:id", deletePost);
router.patch("/:id/likePost", likePost);
router.patch("/:id/bookmark",bookmarkPost);
export default router;
