// src/redux/auth/authReducer.ts
import {
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    SIGNUP_SUCCESS,
    SIGNUP_FAILURE,
  } from '../actions/actionTypes';
  
  const initialState = {
    isAuthenticated: false,
    error: null,
  };
  
  const authReducer = (state = initialState, action: any) => {
    switch (action.type) {
      case LOGIN_SUCCESS:
      case SIGNUP_SUCCESS:
        return {
          ...state,
          isAuthenticated: true,
          error: null,
        };
      case LOGIN_FAILURE:
      case SIGNUP_FAILURE:
        return {
          ...state,
          error: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default authReducer;
  