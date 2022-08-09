import { stopSubmit } from "redux-form";
import { profileAPI } from "../api/api";

const ADD_POST = "ADD-POST";
const ADD_POST_CHANGE = "ADD-POST-CHANGE";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_USER_STATUS = "SET_USER_STATUS";
const PROFILE_EDIT_MODE_TOGGLE = "PROFILE_EDIT_MODE_TOGGLE";
let initialState = {
  posts: [
    {
      id: 1,
      author: "Alex",
      message: "Modi quidem tenetur dolorum eaque numquam cumque cum.",
      likes: "10",
    },
    {
      id: 2,
      author: "Alex",
      message: "Quidem cum aperiam corrupti id neque quis!",
      likes: "5",
    },
  ],
  addPostCurrentText: "",
  profile: null,
  status: "",
  profileEditMode: false,
};
const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        posts: [
          ...state.posts,
          {
            id: "3",
            author: "Alex",
            message: state.addPostCurrentText,
            likes: 0,
          },
        ],
        addPostCurrentText: "",
      };
    case ADD_POST_CHANGE:
      return {
        ...state,
        addPostCurrentText: action.text,
      };
    case SET_USER_PROFILE:
      return { ...state, profile: action.profile };
    case SET_USER_STATUS:
      return { ...state, status: action.status };
    case PROFILE_EDIT_MODE_TOGGLE:
      return { ...state, profileEditMode: action.toggle };
    default:
      return state;
  }
};
export const setUserProfile = (profile) => ({
  type: SET_USER_PROFILE,
  profile,
});
export const setUserStatus = (status) => ({
  type: SET_USER_STATUS,
  status,
});
export const addPost = () => ({
  type: ADD_POST,
});
export const addPostChange = (text) => ({
  type: ADD_POST_CHANGE,
  text,
});
export const profileEditModeToggle = (toggle) => ({
  type: PROFILE_EDIT_MODE_TOGGLE,
  toggle,
});

export const getProfileThunk = (userId) => {
  return async (dispatch) => {
    const response = await profileAPI.getProfile(userId);
    dispatch(setUserProfile(response.data));
  };
};
export const getProfileStatusThunk = (userId) => {
  return async (dispatch) => {
    const response = await profileAPI.getStatus(userId);
    dispatch(setUserStatus(response.data));
  };
};
export const setProfileStatus = (status) => {
  return async (dispatch) => {
    const response = await profileAPI.updateStatus(status);
    response.data.resultCode === 0
      ? dispatch(setUserStatus(status))
      : window.alert("Too many characters.. Max 300");
  };
};
export const setAvatar = (avatar) => {
  return async (dispatch, getState) => {
    const userId = getState().auth.id;
    const response = await profileAPI.updateAvatar(avatar);
    if (response.data.resultCode === 0) {
      dispatch(getProfileThunk(userId));
    }
  };
};
export const setProfileData = (profile) => {
  return async (dispatch, getState) => {
    const response = await profileAPI.setProfileData(profile);
    if (response.data.resultCode === 0) {
      dispatch(getProfileThunk(getState().auth.id));
      dispatch(profileEditModeToggle(false));
    } else
      dispatch(
        stopSubmit("editProfile", { _error: response.data.messages[0] })
      );
  };
};

export default profileReducer;
