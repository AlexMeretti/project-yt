import {ProfileType } from './../types/types';
import {BaseThunkType, InferActionTypes } from './redux-store';
import { authAPI} from "../api/auth-api";
import { profileAPI} from "../api/profile-api";
import { securityAPI } from "../api/security-api";

let initialState = {
  isAuth: false,
  id: null as number | null,
  login: null as string | null,
  email: null as string | null,
  captcha: null as string | null,
  authProfile: null as ProfileType | null,
};
export type AuthInitialStateType = typeof initialState
const messagesReducer = (state = initialState, action: ActionsTypes): AuthInitialStateType => {
  switch (action.type) {
    case 'SET_AUTH_DATA_USER': {
      return { ...state, ...action.data };
    }
    case 'SET_AUTH_DATA_PROFILE': {
      return { ...state, authProfile: action.profile };
    }
    case 'SET_CAPTCHA': {
      return { ...state, captcha: action.captcha };
    }
    default:
      return state;
  }
};

export const getAuthDataThunk = (): ThunkType => {
  return async (dispatch) => {
    const response = await authAPI.getAuthData();
    if (response.resultCode === 0) {
      const { id, login, email } = response.data;
      dispatch(authActions.setAuthDataUser(id, login, email, true));
      const authProfile = await profileAPI.getProfile(id);
      dispatch(authActions.setAuthDataProfile(authProfile));
    }
    
  };
};
export const login = (email: string, password: string, rememberMe: boolean, captcha: string): ThunkType => {
  return async (dispatch) => {
    debugger
    const response = await authAPI.login(email, password, rememberMe, captcha);
    if (response.data.resultCode === 0) {
      dispatch(getAuthDataThunk());
    } else {
      if (response.data.resultCode === 10) {
        const response = await securityAPI.getCaptcha();
        dispatch(authActions.setCaptcha(response.url));
      }
    }
  };
};

export const logout = (): ThunkType => {
  return async (dispatch) => {
    const response = await authAPI.logout();
    if (response.data.resultCode === 0) {
      dispatch(authActions.setAuthDataUser(0, '', '', false));
    }
  };
};
export default messagesReducer;
type ThunkType = BaseThunkType<ActionsTypes>
export type ActionsTypes = InferActionTypes<typeof authActions>

export const authActions = {
  setCaptcha: (captcha: string) => ({
    type: 'SET_CAPTCHA',
    captcha,
  } as const),
  setAuthDataUser: (id: number, login: string, email: string, isAuth: boolean) => ({
    type: 'SET_AUTH_DATA_USER',
    data: { id, login, email, isAuth },
  } as const),
  setAuthDataProfile: (profile: ProfileType) => ({
    type: 'SET_AUTH_DATA_PROFILE',
    profile,
  } as const )
}
