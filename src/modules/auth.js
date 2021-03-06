import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';
import createRequestSaga from '../lib/createRequestSaga';
import * as API from '../lib/api/auth';
import { takeLatest } from 'redux-saga/effects';

//action type
const CHANGE_INPUT = 'auth/CHANGE_INPUT';
const INITIALIZE_INPUT = 'auth/INITIALIZE';
const REGISTER = 'auth/REGISTER';
const REGISTER_SUCCESS = 'auth/REGISTER_SUCCESS';
const REGISTER_FAILURE = 'auth/REGISTER_FAILURE';
const LOGIN = 'auth/LOGIN';
const LOGIN_SUCCESS = 'auth/LOGIN_SUCCESS';
const LOGIN_FAILURE = 'auth/LOGIN_FAILURE';
const LOGOUT = 'auth/LOGOUT';
const CLEAR_ERROR = 'auth/CLEAR_ERROR';

//action creators
export const changeInput = createAction(CHANGE_INPUT, (form, name, value) => ({
  form,
  name,
  value,
}));
export const initialzeInput = createAction(INITIALIZE_INPUT, (form) => ({
  form,
}));
export const register = createAction(
  REGISTER,
  ({ name, birth, registerEmail, registerPassword }) => ({
    name,
    birth,
    email: registerEmail,
    password: registerPassword,
  }),
);
export const login = createAction(
  LOGIN,
  ({ loginEmail: email, loginPassword: password }) => ({
    email,
    password,
  }),
);
export const logout = createAction(LOGOUT);

export const clearError = createAction(CLEAR_ERROR);

//initial State
const initialState = {
  register: {
    name: '',
    birth: '',
    registerEmail: '',
    registerPassword: '',
  },
  login: {
    loginEmail: '',
    loginPassword: '',
  },
  token: null,
  registerError: null,
  loginError: null,
};

//saga
const registerSaga = createRequestSaga(REGISTER, API.register);
const loginSaga = createRequestSaga(LOGIN, API.login);

//authSaga
export function* authSaga() {
  yield takeLatest(REGISTER, registerSaga);
  yield takeLatest(LOGIN, loginSaga);
}

//Reducer
const auth = handleActions(
  {
    //[change_input]: (state,action.type)=>{}
    [CHANGE_INPUT]: (state, { payload: { form, name, value } }) =>
      produce(state, (draft) => {
        draft[form][name] = value;
      }),

    [INITIALIZE_INPUT]: (state, { payload: { form } }) => ({
      ...state,
      [form]: initialState[form],
    }),
    // 성공시 response.data
    [REGISTER_SUCCESS]: (_, { payload: { accessToken } }) => {
      // 토큰을 스토리지에 저장
      localStorage.setItem('token', accessToken);
      return { ...initialState, token: accessToken };
    },

    [REGISTER_FAILURE]: (state, { payload }) => ({
      ...state,
      registerError: payload.code,
    }),

    [LOGIN_SUCCESS]: (_, { payload: { accessToken } }) => {
      localStorage.setItem('token', accessToken);
      return { ...initialState, token: accessToken };
    },

    [LOGIN_FAILURE]: (state, { payload }) => ({
      ...state,
      loginError: payload.code,
    }),

    [LOGOUT]: () => {
      localStorage.removeItem('token');
      return { ...initialState };
    },
    [CLEAR_ERROR]: (state) => ({
      ...state,
      registerError: null,
      loginError: null,
    }),
  },
  initialState,
);

export default auth;
