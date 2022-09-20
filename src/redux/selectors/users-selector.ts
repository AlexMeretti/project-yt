import { AppStateType } from "../redux-store";

export const getCurrentUsers = (state: AppStateType) => {
  return state.usersPage.currentUsers;
};
export const getIsFollowingProcess = (state: AppStateType) => {
    return state.usersPage.isFollowingProcess;
};
export const getPaginationPerPage = (state: AppStateType) => {
  return state.usersPage.pagination.perPage;
};
export const getPaginationTotalCount = (state: AppStateType) => {
  return state.usersPage.pagination.totalCount;
};
export const getPaginationCurrentPage = (state: AppStateType) => {
  return state.usersPage.pagination.currentPage;
};
export const getUsersFilters = (state: AppStateType) => {
  return state.usersPage.filters
}
