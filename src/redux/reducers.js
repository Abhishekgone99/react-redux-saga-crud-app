import {
  CREATE_USER_FAILURE,
  CREATE_USER_START,
  CREATE_USER_SUCCESS,
  DELETE_USER_FAILURE,
  DELETE_USER_START,
  DELETE_USER_SUCCESS,
  LOAD_USERS_FAILURE,
  LOAD_USERS_START,
  LOAD_USERS_SUCCESS,
  UPDATE_USER_FAILURE,
  UPDATE_USER_START,
  UPDATE_USER_SUCCESS,
} from "./actionTypes";

const initialState = {
  users: [],
  loading: true,
  error: null,
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_USERS_START:
    case CREATE_USER_START:
    case DELETE_USER_START:
    case UPDATE_USER_START:
      return {
        ...state,
        loading: true,
      };
    case LOAD_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        users: action.payload,
      };
    case CREATE_USER_SUCCESS:
    case UPDATE_USER_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case DELETE_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        users: state.users.filter((item) => item.id !== action.payload),
      };
    case LOAD_USERS_FAILURE:
    case CREATE_USER_FAILURE:
    case DELETE_USER_FAILURE:
    case UPDATE_USER_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default usersReducer;
