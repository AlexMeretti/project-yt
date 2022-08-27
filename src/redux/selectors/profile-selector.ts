import { AppStateType } from "../redux-store";

export const getProfilePage = (state: AppStateType) => {
  return state.profilePage;
};
export const getProfile = (state: AppStateType) => {
  return state.profilePage.profile;
};
export const getAuth = (state: AppStateType) => {
  return state.auth;
};
export const getProfileEditMode = (state: AppStateType) => {
  return state.profilePage.profileEditMode;
};
export const getProfileStatus = (state: AppStateType) => {
  return state.profilePage.status;
};