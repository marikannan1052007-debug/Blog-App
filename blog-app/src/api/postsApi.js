import api from "./axios";

export const getPosts = async () => {
  const response = await api.get("/posts");
  return response.data;
};

export const getPost = async (id) => {
  const response = await api.get(`/posts/${id}`);
  return response.data;
};

export const createPost = async (postData) => {
  const response = await api.post("/posts", postData);
  return response.data;
};

export const deletePost = async (id) => {
  const response = await api.delete(`/posts/${id}`);
  return response.data;
};