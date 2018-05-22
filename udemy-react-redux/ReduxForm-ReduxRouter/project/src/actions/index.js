import axios from "axios";
import * as types from "../types";

const API_URL = "http://reduxblog.herokuapp.com/api";
const API_KEY = "?key=douglira";

export const fetchPosts = () => {
  const request = axios.get(`${API_URL}/posts${API_KEY}`);
  return {
    type: types.FETCH_POSTS,
    payload: request
  };
};

export const createPost = (values, callback) => {
  const request = axios
    .post(`${API_URL}/posts${API_KEY}`, values)
    .then(() => callback());

  return {
    type: types.CREATE_POST,
    payload: request
  };
};

export const fetchPost = id => {
  const request = axios.get(`${API_URL}/posts/${id + API_KEY}`);

  return {
    type: types.FETCH_POST,
    payload: request
  };
};

export const deletePost = (id, callback) => {
  const request = axios
    .delete(`${API_URL}/posts/${id + API_KEY}`)
    .then(() => callback());

  return {
    type: types.DELETE_POST,
    payload: id
  };
};
