import { stopSubmit } from "redux-form";
import { authAPI, profileAPI, securityAPI } from "../api/api";

const SET_AUTH_DATA_USER = "SET_AUTH_DATA_USER";
const SET_AUTH_DATA_PROFILE = "SET_AUTH_DATA_PROFILE";
const SET_CAPTCHA = "SET_CAPTCHA";

let initialState = {
  isAuth: false,
  id: null,
  login: null,
  email: null,
  captcha: null,
  authProfile: null,
};

const messagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_AUTH_DATA_USER: {
      return { ...state, ...action.data };
    }
    case SET_AUTH_DATA_PROFILE: {
      return { ...state, authProfile: action.profile };
    }
    case SET_CAPTCHA: {
      return { ...state, captcha: action.captcha };
    }
    default:
      return state;
  }
};
export const setCaptcha = (captcha) => ({
  type: SET_CAPTCHA,
  captcha,
});
export const setAuthDataUser = (id, login, email, isAuth) => ({
  type: SET_AUTH_DATA_USER,
  data: { id, login, email, isAuth },
});
export const setAuthDataProfile = (profile) => ({
  type: SET_AUTH_DATA_PROFILE,
  profile,
});

export const getAuthDataThunk = () => {
  return async (dispatch) => {
    const response = await authAPI.getAuthData();
    if (response.data.resultCode === 0) {
      const { id, login, email } = response.data.data;
      dispatch(setAuthDataUser(id, login, email, true));
      const authProfile = await profileAPI.getProfile(id);
      dispatch(setAuthDataProfile(authProfile.data));
    }
  };
};
export const login = (email, password, rememberMe, captcha) => {
  return async (dispatch) => {
    const response = await authAPI.login(email, password, rememberMe, captcha);
    if (response.data.resultCode === 0) {
      dispatch(getAuthDataThunk());
    } else {
      if (response.data.resultCode === 10) {
        const response = await securityAPI.getCaptcha();
        dispatch(setCaptcha(response.data.url));
      }
      dispatch(stopSubmit("login", { _error: response.data.messages[0] }));
    }
  };
};
export const logout = () => {
  return async (dispatch) => {
    const response = await authAPI.logout();
    if (response.data.resultCode === 0) {
      dispatch(setAuthDataUser(null, null, null, false));
    }
  };
};
export default messagesReducer;
