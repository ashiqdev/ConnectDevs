/* eslint-disable import/prefer-default-export */
import axios from "axios";
import setAuthToken from "src/utils/setAuthToken";
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  AUTH_ERROR,
  USER_LOADED,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOG_OUT,
  CLEAR_PROFILE,
} from "./types";

import { setAlert } from "./alert";

// LOAD USER
// if there is a token on localstorage, I will always send that
export const loadUser = () => async (dispatch) => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }

  try {
    const res = await axios.get(`${process.env.API_URL}/api/auth`);

    dispatch({ type: USER_LOADED, payload: res.data });
  } catch (error) {
    dispatch({ type: AUTH_ERROR });
  }
};

// REGISTER USER
export const register = ({ name, email, password }) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const body = JSON.stringify({ name, email, password });

  try {
    // send request to server
    const res = await axios.post(
      `${process.env.API_URL}/api/users/`,
      body,
      config
    );

    dispatch({ type: REGISTER_SUCCESS, payload: res.data });

    dispatch(loadUser());
  } catch (error) {
    const { errors } = error.response.data;

    if (errors) {
      errors.forEach((err) => dispatch(setAlert(err.msg, "danger")));
    }
    dispatch({ type: REGISTER_FAIL });
  }
};

// LOGIN USER
export const login = (email, password) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const body = JSON.stringify({ email, password });

  try {
    // send request to server
    const res = await axios.post(
      `${process.env.API_URL}/api/auth/`,
      body,
      config
    );

    dispatch({ type: LOGIN_SUCCESS, payload: res.data });

    dispatch(loadUser());
  } catch (error) {
    const { errors } = error.response.data;

    if (errors) {
      errors.forEach((err) => dispatch(setAlert(err.msg, "danger")));
    }
    dispatch({ type: LOGIN_FAIL });
  }
};

// LOGOUT / CLEAR PROFILE
export const logout = () => async (dispatch) => {
  dispatch({ type: CLEAR_PROFILE });
  dispatch({ type: LOG_OUT });
};
