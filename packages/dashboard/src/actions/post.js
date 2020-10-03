import axios from "axios";
import { setAlert } from "./alert";
import {
  ADD_POST,
  DELETE_POST,
  GET_POST,
  GET_POSTS,
  POST_ERROR,
  UPDATE_LIKES,
  ADD_COMMENT,
  REMOVE_COMMENT,
} from "./types";

// Get Posts
export const getPosts = () => async (dispatch) => {
  try {
    const res = await axios.get(`${process.env.API_URL}/api/posts`);
    dispatch({
      type: GET_POSTS,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: POST_ERROR,
      payload: error.response.statusText,
      status: error.response.status,
    });
  }
};

// GET POST
export const getPost = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`${process.env.API_URL}/api/posts/${id}`);
    dispatch({
      type: GET_POST,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: POST_ERROR,
      payload: error.response.statusText,
      status: error.response.status,
    });
  }
};

// ADD LIKE
export const addLike = (postId) => async (dispatch) => {
  try {
    const res = await axios.put(
      `${process.env.API_URL}/api/posts/like/${postId}`
    );
    dispatch({
      type: UPDATE_LIKES,
      payload: {
        id: postId,
        likes: res.data,
      },
    });
  } catch (error) {
    dispatch({
      type: POST_ERROR,
      payload: error.response.statusText,
      status: error.response.status,
    });
  }
};

// REMOVE LIKE
export const removeLike = (postId) => async (dispatch) => {
  try {
    const res = await axios.put(
      `${process.env.API_URL}/api/posts/unlike/${postId}`
    );
    dispatch({
      type: UPDATE_LIKES,
      payload: {
        id: postId,
        likes: res.data,
      },
    });
  } catch (error) {
    dispatch({
      type: POST_ERROR,
      payload: error.response.statusText,
      status: error.response.status,
    });
  }
};

// DELETE POST
export const deletePost = (id) => async (dispatch) => {
  try {
    await axios.delete(`${process.env.API_URL}/api/posts/${id}`);
    dispatch({
      type: DELETE_POST,
      payload: id,
    });
    dispatch(setAlert("Post Removed", "success"));
  } catch (error) {
    dispatch({
      type: POST_ERROR,
      payload: error.response.statusText,
      status: error.response.status,
    });
  }
};

// create Post
export const addPost = (formData) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  try {
    const res = await axios.post(
      `${process.env.API_URL}/api/posts`,
      formData,
      config
    );
    dispatch({
      type: ADD_POST,
      payload: res.data,
    });
    dispatch(setAlert("Post Created", "success"));
  } catch (error) {
    dispatch({
      type: POST_ERROR,
      payload: error.response.statusText,
      status: error.response.status,
    });
  }
};

// ADD COMMENT
export const addComment = (postId, formData) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  try {
    const res = await axios.post(
      `${process.env.API_URL}/api/posts/comment/${postId}`,
      formData,
      config
    );
    dispatch({
      type: ADD_COMMENT,
      payload: res.data,
    });
    dispatch(setAlert("Comment Added", "success"));
  } catch (error) {
    dispatch({
      type: POST_ERROR,
      payload: error.response.statusText,
      status: error.response.status,
    });
  }
};

// DELETE COMMENT
export const deleteComment = (postId, commentId) => async (dispatch) => {
  try {
    const res = await axios.delete(
      `${process.env.API_URL}/api/posts/comment/${postId}/${commentId}`
    );
    dispatch({
      type: REMOVE_COMMENT,
      payload: commentId,
    });
    dispatch(setAlert("Comment Removed", "success"));
  } catch (error) {
    dispatch({
      type: POST_ERROR,
      payload: error.response.statusText,
      status: error.response.status,
    });
  }
};
