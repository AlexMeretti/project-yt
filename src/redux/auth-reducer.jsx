import { stopSubmit } from "redux-form";
import { authAPI } from "../api/api";

const SET_AUTH_DATA_USER = "SET_AUTH_DATA_USER";

let initialState = {
  isAuth: false,
  id: null,
  login: null,
  email: null,
};

const messagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_AUTH_DATA_USER: {
      return { ...state, ...action.data };
    }
    default:
      return state;
  }
};
export const setAuthDataUser = (id, login, email, isAuth) => ({
  type: SET_AUTH_DATA_USER,
  data: { id, login, email, isAuth },
});

export const getAuthDataThunk = () => {
  return (dispatch) => {
    authAPI.getAuthData().then((response) => {
      if (response.data.resultCode === 0) {
        const { id, login, email } = response.data.data;
        dispatch(setAuthDataUser(id, login, email, true));
      }
    });
  };
};
export const login = (email, password, rememberMe) => {
  return (dispatch) => {
    authAPI.login(email, password, rememberMe).then((response) => {
      if (response.data.resultCode === 0) {
        dispatch(getAuthDataThunk());
      } else if (response.data.resultCode === 1) {
        dispatch(stopSubmit("login", { _error: response.data.messages[0] }));
      } else if (response.data.resultCode === 10) {
        dispatch(stopSubmit("login", { _error: "Captcha is wrong" }));
      }
    });
  };
};
export const logout = () => {
  return (dispatch) => {
    authAPI.logout().then((response) => {
      if (response.data.resultCode === 0) {
        dispatch(setAuthDataUser(null, null, null, false));
      }
    });
  };
};
export default messagesReducer;
