import {
  LOAD_USERS_START,
  LOAD_USERS_SUCCESS,
  LOAD_USERS_FAILURE,
  CREATE_USER_START,
  CREATE_USER_SUCCESS,
  CREATE_USER_FAILURE,
  DELETE_USER_FAILURE,
  DELETE_USER_START,
  DELETE_USER_SUCCESS,
  UPDATE_USER_FAILURE,
  UPDATE_USER_START,
  UPDATE_USER_SUCCESS,
} from "./actionTypes";

export const loadUsersStart = () => {
  return {
    type: LOAD_USERS_START,
  };
};

export const loadUsersSuccess = (users) => {
  return {
    type: LOAD_USERS_SUCCESS,
    payload: users,
  };
};

export const loadUsersFailure = (error) => {
  return {
    type: LOAD_USERS_FAILURE,
    payload: error,
  };
};

export const createUserStart = (user) => {
  return {
    type: CREATE_USER_START,
    payload: user,
  };
};

export const createUserSuccess = () => {
  return {
    type: CREATE_USER_SUCCESS,
  };
};

export const createUserFailure = (error) => {
  return {
    type: CREATE_USER_FAILURE,
    payload: error,
  };
};

export const deleteUserStart = (userId) => {
  return {
    type: DELETE_USER_START,
    payload: userId,
  };
};

export const deleteUserSuccess = (userId) => {
  return {
    type: DELETE_USER_SUCCESS,
    payload: userId,
  };
};

export const deleteUserFailure = (error) => {
  return {
    type: DELETE_USER_FAILURE,
    payload: error,
  };
};

//userInfo is an object we receive from the component with updated user info and id
export const updateUserStart = (userInfo) => {
  return {
    type: UPDATE_USER_START,
    payload: userInfo,
  };
};

export const updateUserSuccess = () => {
  return {
    type: UPDATE_USER_SUCCESS,
  };
};

export const updateUserFailure = (error) => {
  return {
    type: UPDATE_USER_FAILURE,
    payload: error,
  };
};
