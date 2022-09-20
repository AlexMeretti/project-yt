import { AppStateType, InferActionTypes } from '../redux-store';
import { ThunkAction } from "redux-thunk";
import { usersAPI } from "../../api/users-api";
import { CurrentUsersType, FiltersType } from "../../types/types";

let initialState = {
  currentUsers: [] as Array<CurrentUsersType>,
  isFollowingProcess: [] as Array<number>,
  pagination: {
    totalCount: undefined as undefined | number,
    perPage: 10,
    pagesCount: 1,
    currentPage: 1,
  },
  filters: {
    term: '' as string,
    friend: null as null | boolean
  }
};
type usersInitialStateType = typeof initialState
const usersReducer = (state = initialState, action: ActionsTypes): usersInitialStateType => {
  switch (action.type) {
    case 'SET_FILTERS': {
      return {
        ...state, filters: {...action.filters}
      }
    }
    case 'SET_CURRENT_PAGE':
      return {
        ...state, pagination: {...state.pagination, currentPage: action.page}
      }
      case 'SET_PER_PAGE':
      return {
        ...state, pagination: {...state.pagination, perPage: action.perPage}
      }
    case 'SET_TOTAL_COUNT':
      return {
        ...state, pagination: {...state.pagination, totalCount: action.count}
      }
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
export const getCurrentUsers = (): ThunkType => {
  return async (dispatch, getState) => {
    const {currentPage, perPage} = getState().usersPage.pagination
    const {term, friend} = getState().usersPage.filters
    const response = await usersAPI.getUsers(currentPage, perPage, term, friend);
    dispatch(usersActions.setCurrentUsers(response.items));
    dispatch(usersActions.setTotalCount(response.totalCount))
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

export const followThunk = (userId: number): ThunkType => {
  return async(dispatch) => {
    dispatch(_followUnfollowThunk(userId, usersAPI.follow(userId)));
  };
};
export const unfollowThunk = (userId: number): ThunkType => {
  return async(dispatch) => {
    dispatch(_followUnfollowThunk(userId, usersAPI.unfollow(userId)));
  };
};
export default usersReducer;
type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsTypes>
type ActionsTypes = InferActionTypes<typeof usersActions>

export const usersActions = {
  setPerPage: (perPage: number) => ({
    type: 'SET_PER_PAGE',
    perPage
  } as const),
  setFilters: (filters: FiltersType) => ({
    type: 'SET_FILTERS',
    filters: {...filters}
  } as const),
  setCurrentPage: (page: number) => ({
    type: 'SET_CURRENT_PAGE',
    page
  } as const),
  setTotalCount: (count: number) => ({
    type: 'SET_TOTAL_COUNT',
    count
  } as const),
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