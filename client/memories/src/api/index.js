import axios from "axios";
import { applyMiddleware } from "redux";

const url = "http://localhost:5000/posts";

export const fetchPosts = () => axios.get(url);
export const fetchPostsBySearch = (searchQuery) =>
  axios.get(
    `http://localhost:5000/posts/search?searchQuery=${
      searchQuery.search || "none"
    }&tags=${searchQuery.tags}`
  );
export const createPost = (newPost) => axios.post(url, newPost);
export const likePost = (id) => axios.patch(`${url}/${id}/likePost`);
export const updatePost = (id, updatedPost) =>
  axios.patch(`${url}/${id}`, updatedPost);
export const deletePost = (id) => axios.delete(`${url}/${id}`);
