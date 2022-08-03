import { usersAPI } from "../api/api";
const USER_TOGGLE_FOLLOW = "USER_TOGGLE_FOLLOW";
const USER_UNFOLLOW = "USER_UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_USERS_TOTAL_COUNT = "SET_USERS_TOTAL_COUNT";
const SET_USERS_TOTAL_PAGES = "SET_USERS_TOTAL_PAGES";
const SET_USERS_ACTIVE_PAGE = "SET_USERS_ACTIVE_PAGE";
const SET_USERS_FETCHING = "SET_USERS_FETCHING";
const USER_BUTTON_PROCESS = "USER_BUTTON_PROCESS";
let initialState = {
  users: [],
  pagination: {
    usersPerPage: 10,
    usersTotalCount: 0,
    usersActivePage: 1,
    usersTotalPages: 0,
  },
  isFetching: false,
  isFollowingProcess: [],
};
const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_TOGGLE_FOLLOW:
      return {
        ...state,
        users: state.users.map((user) => {
          if (user.id === action.userId) {
            return { ...user, followed: !user.followed };
          } else return user;
        }),
      };
    case SET_USERS:
      return {
        ...state,
        users: [...action.users],
      };
    case SET_USERS_TOTAL_COUNT:
      return {
        ...state,
        pagination: { ...state.pagination, usersTotalCount: action.usersCount },
      };
    case SET_USERS_TOTAL_PAGES:
      return {
        ...state,
        pagination: { ...state.pagination, usersTotalPages: action.pages },
      };
    case SET_USERS_ACTIVE_PAGE:
      return {
        ...state,
        pagination: { ...state.pagination, usersActivePage: action.page },
      };
    case SET_USERS_FETCHING:
      return {
        ...state,
        isFetching: action.isFetching,
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
export const userToggleFollow = (userId) => ({
  type: USER_TOGGLE_FOLLOW,
  userId,
});
export const userUnfollow = (userId) => ({
  type: USER_UNFOLLOW,
  userId,
});
export const setUsers = (users) => ({
  type: SET_USERS,
  users,
});
export const setUsersTotalCount = (usersCount) => ({
  type: SET_USERS_TOTAL_COUNT,
  usersCount,
});
export const setUsersTotalPages = (pages) => ({
  type: SET_USERS_TOTAL_PAGES,
  pages,
});
export const setUsersActivePage = (page) => ({
  type: SET_USERS_ACTIVE_PAGE,
  page,
});
export const setUsersFetching = (isFetching) => ({
  type: SET_USERS_FETCHING,
  isFetching,
});
export const userButtonProcess = (id, isProcess) => ({
  type: USER_BUTTON_PROCESS,
  id,
  isProcess,
});
export const getUsersThunk = (usersActivePage, usersPerPage) => {
  return (dispatch) => {
    dispatch(setUsersFetching(true));
    usersAPI.getUsers(usersActivePage, usersPerPage).then((data) => {
      dispatch(setUsersFetching(false));
      dispatch(setUsers(data.items));
      dispatch(setUsersTotalCount(data.totalCount));
      dispatch(setUsersTotalPages(data.totalCount / usersPerPage));
    });
  };
};
export const usersChangePageThunk = (page, usersPerPage) => {
  return (dispatch) => {
    dispatch(setUsersFetching(true));
    dispatch(setUsersActivePage(page));
    usersAPI.usersChangePage(page, usersPerPage).then((data) => {
      dispatch(setUsers(data.items));
      dispatch(setUsersFetching(false));
    });
  };
};
export const followThunk = (userId) => {
  return (dispatch) => {
    dispatch(userButtonProcess(userId, true));
    usersAPI.follow(userId).then((response) => {
      if (response.data.resultCode === 0) {
        dispatch(userToggleFollow(userId));
      }
      dispatch(userButtonProcess(userId, false));
    });
  };
};
export const unfollowThunk = (userId) => {
  return (dispatch) => {
    dispatch(userButtonProcess(userId, true));
    usersAPI.unfollow(userId).then((response) => {
      if (response.data.resultCode === 0) {
        dispatch(userToggleFollow(userId));
      }
      dispatch(userButtonProcess(userId, false));
    });
  };
};
export default usersReducer;
