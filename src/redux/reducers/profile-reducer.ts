import { PostsType } from './../../types/types';
import { BaseThunkType, InferActionTypes } from '../redux-store';
import { profileAPI } from "../../api/profile-api";
import { ProfileType } from '../../types/types';

let initialState = {
  posts: [
    {
      id: 1,
      author: "Alex",
      message: "Modi quidem tenetur dolorum eaque numquam cumque cum.",
      likes: 5,
    },
    {
      id: 2,
      author: "Alex",
      message: "Quidem cum aperiam corrupti id neque quis!",
      likes: 5,
    },
  ] as Array<PostsType>,
  addPostCurrentText: "",
  profile: null as ProfileType | null,
  status: "",
  profileEditMode: false,
};
export type ProfileInitialStateType = typeof initialState
const profileReducer = (state = initialState, action: ActionsTypes): ProfileInitialStateType=> {
  switch (action.type) {
    case 'SET_USER_PROFILE':
      return { ...state, profile: action.profile };
    case 'SET_USER_STATUS':
      return { ...state, status: action.status };
    case 'PROFILE_EDIT_MODE_TOGGLE':
      return { ...state, profileEditMode: action.toggle };
    default:
      return state;
  }
};


export const getProfile = (userId: number): ThunkType => {
  return async (dispatch) => {
    const response = await profileAPI.getProfile(userId);
    dispatch(profileActions.setUserProfile(response));
  };
};
export const getProfileStatus = (userId: number): ThunkType => {
  return async (dispatch) => {
    const response = await profileAPI.getStatus(userId);
    dispatch(profileActions.setUserStatus(response.data));
  };
};
export const setProfileStatus = (status: string): ThunkType => {
  return async (dispatch) => {
    const response = await profileAPI.updateStatus(status);
    response.data.resultCode === 0
      ? dispatch(profileActions.setUserStatus(status))
      : window.alert("Too many characters.. Max 300");
  };
};
export const setAvatar = (avatar: File): ThunkType => {
  return async (dispatch, getState) => {
    const userId = getState().auth.id;
    const response = await profileAPI.updateAvatar(avatar);
    if (response.data.resultCode === 0) {
      if(userId) {
        dispatch(getProfile(userId));
      }
    }
  };
};
export const setProfileData = (profile: ProfileType): ThunkType => {
  return async (dispatch, getState) => {
    const response = await profileAPI.setProfileData(profile);
    if (response.data.resultCode === 0) {
      const userId = getState().auth.id
      if(userId) {
        dispatch(getProfile(userId));
        dispatch(profileActions.profileEditModeToggle(false));
      }
    }
  };
};

export default profileReducer;
type ThunkType = BaseThunkType<ActionsTypes>
type ActionsTypes = InferActionTypes<typeof profileActions>

export const profileActions = {
  setUserProfile: (profile: ProfileType) => ({
    type: 'SET_USER_PROFILE',
    profile,
  } as const),
  
  setUserStatus: (status: string) => ({
    type: 'SET_USER_STATUS',
    status,
  } as const),
  profileEditModeToggle: (toggle: boolean) => ({
    type: 'PROFILE_EDIT_MODE_TOGGLE',
    toggle,
  } as const)
  
}