import { AppStateType } from "../redux-store";

export const getIsAuth = (state: AppStateType) => {
  return state.auth.isAuth;
};
export const getAuthProfile = (state: AppStateType) => {
  return state.auth.authProfile;
};
export const getAuthLogin = (state: AppStateType) => {
  return state.auth.login;
};
export const getAuthId = (state: AppStateType) => {
  return state.auth.id;
};
export const getCaptcha  = (state: AppStateType) => {
  return state.auth.captcha;
};