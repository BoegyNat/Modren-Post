import axios from "axios";

const BASE_URL = "https://jsonplaceholder.typicode.com/posts";

export const getPosts = () => axios.get(BASE_URL);

export const createPost = (post) => axios.post(BASE_URL, post);

export const updatePost = (id, post) => axios.put(`${BASE_URL}/${id}`, post);

export const deletePost = (id) => axios.delete(`${BASE_URL}/${id}`);
