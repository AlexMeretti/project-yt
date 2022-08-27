import { AppStateType, InferActionTypes } from './redux-store';
import { ThunkAction } from "redux-thunk";
import { usersAPI } from "../api/users-api";
import { CurrentUsersType } from "../types/types";

let initialState = {
  currentUsers: [] as Array<CurrentUsersType>,
  isFollowingProcess: [] as Array<number>,
};
type usersInitialStateType = typeof initialState
const usersReducer = (state = initialState, action: ActionsTypes): usersInitialStateType => {
  switch (action.type) {
    case 'USER_TOGGLE_FOLLOW':
      return {
        ...state,
        currentUsers: state.currentUsers.map((user) => {
          if (user.id === action.userId) {
            return { ...user, followed: !user.followed };
          } else return user;
        }),
      };
    case 'SET_CURRENT_USERS':
      return {
        ...state,
        currentUsers: [...action.currentUsers],
      };
    case 'USER_BUTTON_PROCESS':
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
export const getCurrentUsers = (page: number, perPage: number): ThunkType => {
  return async (dispatch) => {
    const response = await usersAPI.getUsers(page, perPage);
    dispatch(usersActions.setCurrentUsers(response.items));
    return response.totalCount;
  };
};
const _followUnfollowThunk = (userId: number, methodApi: any)=> {
  return async (dispatch: any) => {
    dispatch(usersActions.userButtonProcess(userId, true));
    const response = await methodApi;
    if (response.data.resultCode === 0) {
      dispatch(usersActions.userToggleFollow(userId));
    }
    dispatch(usersActions.userButtonProcess(userId, false));
  };
};

export const followThunk = (userId: number): MyThunkType => {
  return async(dispatch) => {
    dispatch(_followUnfollowThunk(userId, usersAPI.follow(userId)));
  };
};
export const unfollowThunk = (userId: number): MyThunkType => {
  return async(dispatch) => {
    dispatch(_followUnfollowThunk(userId, usersAPI.unfollow(userId)));
  };
};
export default usersReducer;
type MyThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsTypes>
type ThunkType = ThunkAction<Promise<number>, AppStateType, unknown, ActionsTypes>
type ActionsTypes = InferActionTypes<typeof usersActions>

export const usersActions = {
  setCurrentUsers: (currentUsers: Array<CurrentUsersType>) => ({
    type: 'SET_CURRENT_USERS',
    currentUsers,
  } as const),
  
  userToggleFollow: (userId: number) => ({
    type: 'USER_TOGGLE_FOLLOW',
    userId,
  } as const),
  
  userButtonProcess: (id: number, isProcess: boolean) => ({
    type: 'USER_BUTTON_PROCESS',
    id,
    isProcess,
  } as const)
}