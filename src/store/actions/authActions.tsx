// src/redux/auth/authActions.ts
import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    SIGNUP_REQUEST,
    SIGNUP_SUCCESS,
    SIGNUP_FAILURE,
  } from './actionTypes';
  
  export const loginRequest = (email: string, password: string) => ({
    type: LOGIN_REQUEST,
    payload: { email, password },
  });
  
  export const loginSuccess = () => ({
    type: LOGIN_SUCCESS,
  });
  
  export const loginFailure = (error: any) => ({
    type: LOGIN_FAILURE,
    payload: error,
  });
  
  export const signupRequest = (email: string, password: string, isActive: boolean) => ({
    type: SIGNUP_REQUEST,
    payload: { email, password, isActive },
  });
  
  export const signupSuccess = () => ({
    type: SIGNUP_SUCCESS,
  });
  
  export const signupFailure = (error: any) => ({
    type: SIGNUP_FAILURE,
    payload: error,
  });
  