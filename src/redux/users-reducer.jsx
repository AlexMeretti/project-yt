import { usersAPI } from "../api/api";
const USER_TOGGLE_FOLLOW = "USER_TOGGLE_FOLLOW";
const SET_CURRENT_USERS = "SET_CURRENT_USERS";
const USER_BUTTON_PROCESS = "USER_BUTTON_PROCESS";
let initialState = {
  currentUsers: [],
  isFollowingProcess: [],
};
const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_TOGGLE_FOLLOW:
      return {
        ...state,
        currentUsers: state.currentUsers.map((user) => {
          if (user.id === action.userId) {
            return { ...user, followed: !user.followed };
          } else return user;
        }),
      };
    case SET_CURRENT_USERS:
      return {
        ...state,
        currentUsers: [...action.currentUsers],
      };
    case USER_BUTTON_PROCESS:
      return {
        ...state,
        isFollowingProcess: action.isProcess
          ? [...state.isFollowingProcess, action.id]
          : state.isFollowingProcess.filter((id) => id !== action.id),
      };
    default:
      return state;
  }
};
export const setCurrentUsers = (currentUsers) => ({
  type: SET_CURRENT_USERS,
  currentUsers,
});
export const userToggleFollow = (userId) => ({
  type: USER_TOGGLE_FOLLOW,
  userId,
});

export const userButtonProcess = (id, isProcess) => ({
  type: USER_BUTTON_PROCESS,
  id,
  isProcess,
});
export const getCurrentUsers = (page, perPage) => {
  return async (dispatch) => {
    const response = await usersAPI.getUsers(page, perPage);
    dispatch(setCurrentUsers(response.items));
    return response.totalCount;
  };
};
export const followUnfollowThunk = (userId, methodApi) => {
  return async (dispatch) => {
    debugger;
    dispatch(userButtonProcess(userId, true));
    const response = await methodApi;
    if (response.data.resultCode === 0) {
      dispatch(userToggleFollow(userId));
    }
    dispatch(userButtonProcess(userId, false));
  };
};

export const followThunk = (userId) => {
  return (dispatch) => {
    dispatch(followUnfollowThunk(userId, usersAPI.follow(userId)));
  };
};
export const unfollowThunk = (userId) => {
  return (dispatch) => {
    dispatch(followUnfollowThunk(userId, usersAPI.unfollow(userId)));
  };
};
export default usersReducer;
