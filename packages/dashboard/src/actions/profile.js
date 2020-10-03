import axios from "axios";
import { setAlert } from "./alert";

import {
  CLEAR_PROFILE,
  ACCOUNT_DELETED,
  GET_PROFILE,
  PROFILE_ERROR,
  UPDATE_PROFILE,
  GET_PROFILES,
  GET_REPOS,
} from "./types";

// Get current users profile
export const getCurrentProfile = () => async (dispatch) => {
  try {
    const res = await axios.get(`${process.env.API_URL}/api/profile/me`);
    dispatch({ type: GET_PROFILE, payload: res.data });
  } catch (error) {
    dispatch({
      type: PROFILE_ERROR,
      payload: error.response.statusText,
      status: error.response.status,
    });
  }
};

// Get all users profile
export const getAllUsersProfile = () => async (dispatch) => {
  dispatch({ type: CLEAR_PROFILE });
  try {
    const res = await axios.get(`${process.env.API_URL}/api/profile`);
    dispatch({
      type: GET_PROFILES,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: PROFILE_ERROR,
      payload: {
        msg: error.response.statusText,
        status: error.response.staus,
      },
    });
  }
};

// Get profile by user id
export const getProfileById = (userId) => async (dispatch) => {
  try {
    const res = await axios.get(
      `${process.env.API_URL}/api/profile/user/${userId}`
    );
    dispatch({
      type: GET_PROFILE,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: PROFILE_ERROR,
      payload: {
        msg: error.response.statusText,
        status: error.response.status,
      },
    });
  }
};

// Get Github repos
export const getGithubRepos = (username) => async (dispatch) => {
  try {
    const res = await axios.get(
      `${process.env.API_URL}/api/profile/github/${username}`
    );

    dispatch({ type: GET_REPOS, payload: res.data });
  } catch (error) {
    dispatch({
      type: PROFILE_ERROR,
      payload: {
        msg: error.response.statusText,
        status: error.response.status,
      },
    });
  }
};

// Create or Update Profile
export const createProfile = (formData, history, edit = false) => async (
  dispatch
) => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const res = await axios.post(
      `${process.env.API_URL}/api/profile`,
      formData,
      config
    );

    dispatch({
      type: GET_PROFILE,
      payload: res.data,
    });

    dispatch(setAlert(edit ? "Profile Updated" : "Profile Created", "success"));

    if (!edit) {
      history.push("/dashboard");
    }
  } catch (error) {
    const { errors } = error.response.data;

    if (errors) {
      errors.forEach((err) => dispatch(setAlert(err.msg, "danger")));
    }

    dispatch({
      type: PROFILE_ERROR,
      payload: error.response.statusText,
      status: error.response.status,
    });
  }
};

// add experience
export const addExperience = (formData, history) => async (dispatch) => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const res = await axios.put(
      `${process.env.API_URL}/api/profile/experience`,
      formData,
      config
    );

    dispatch({
      type: UPDATE_PROFILE,
      payload: res.data,
    });

    dispatch(setAlert("Experience added", "success"));

    history.push("/dashboard");
  } catch (error) {
    const { errors } = error.response.data;

    if (errors) {
      errors.forEach((err) => dispatch(setAlert(err.msg, "danger")));
    }

    dispatch({
      type: PROFILE_ERROR,
      payload: error.response.statusText,
      status: error.response.status,
    });
  }
};

// add education
export const addEducation = (formData, history) => async (dispatch) => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const res = await axios.put(
      `${process.env.API_URL}/api/profile/education`,
      formData,
      config
    );

    dispatch({
      type: UPDATE_PROFILE,
      payload: res.data,
    });

    dispatch(setAlert("Education added", "success"));

    history.push("/dashboard");
  } catch (error) {
    const { errors } = error.response.data;

    if (errors) {
      errors.forEach((err) => dispatch(setAlert(err.msg, "danger")));
    }

    dispatch({
      type: PROFILE_ERROR,
      payload: error.response.statusText,
      status: error.response.status,
    });
  }
};

// delete experience
export const deleteExperience = (id) => async (dispatch) => {
  try {
    const res = await axios.delete(
      `${process.env.API_URL}/api/profile/experience/${id}`
    );

    dispatch({
      type: UPDATE_PROFILE,
      payload: res.data,
    });

    dispatch(setAlert("Experience Removed", "success"));
  } catch (error) {
    dispatch({
      type: PROFILE_ERROR,
      payload: error.response.statusText,
      status: error.response.status,
    });
  }
};

// delete education
export const deleteEducation = (id) => async (dispatch) => {
  try {
    const res = await axios.delete(
      `${process.env.API_URL}/api/profile/education/${id}`
    );

    dispatch({
      type: UPDATE_PROFILE,
      payload: res.data,
    });

    dispatch(setAlert("Education Removed", "success"));
  } catch (error) {
    dispatch({
      type: PROFILE_ERROR,
      payload: error.response.statusText,
      status: error.response.status,
    });
  }
};

// delete account and profile
export const deleteAccount = () => async (dispatch) => {
  if (window.confirm("Are you sure? This can not be undone!")) {
    try {
      await axios.delete(`${process.env.API_URL}/api/profile`);

      dispatch({
        type: CLEAR_PROFILE,
      });

      dispatch({
        type: ACCOUNT_DELETED,
      });

      dispatch(setAlert("Your account has been deleted", "danger"));
    } catch (error) {
      dispatch({
        type: PROFILE_ERROR,
        payload: error.response.statusText,
        status: error.response.status,
      });
    }
  }
};
