// src/redux/auth/authSagas.ts
import { call, put, takeEvery } from 'redux-saga/effects';
import { LOGIN_REQUEST, SIGNUP_REQUEST } from '../actions/actionTypes';
import { loginSuccess, loginFailure, signupSuccess, signupFailure } from '../actions/authActions';


// Mock API call for login
const loginApi = async (email: string, password: string) => {
  const response = await fetch('http://localhost:3000/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email,
      password,
    }),
  });

  if (!response.ok) {
    throw new Error('Login failed: ' + response.statusText);
  }

  return await response.json();
};

// Updated signup API call to call localhost:3000
const signupApi = async (email: string, password: string, isActive: boolean) => {
  const response = await fetch('http://localhost:3000/signup', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email,
      password,
      isActive,
    }),
  });

  if (!response.ok) {
    throw new Error('Signup failed: ' + response.statusText);
  }

  return await response.json();
};

function* login(action: any) {
  try {
    yield call(loginApi, action.payload.email, action.payload.password);
    yield put(loginSuccess());
  } catch (error) {
    yield put(loginFailure(error));
  }
}

function* signup(action: any) {
  try {
    yield call(signupApi, action.payload.email, action.payload.password, action.payload.isActive);
    yield put(signupSuccess());
  } catch (error) {
    yield put(signupFailure(error));
  }
}

export function* authSaga() {
  yield takeEvery(LOGIN_REQUEST, login);
  yield takeEvery(SIGNUP_REQUEST, signup);
}
