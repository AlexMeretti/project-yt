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
export const getPaginationPagesCount = (state: AppStateType) => {
  return state.usersPage.pagination.pagesCount;
};
export const getPaginationCurrentPage = (state: AppStateType) => {
  return state.usersPage.pagination.currentPage;
};
export const getPaginationFilters = (state: AppStateType) => {
  return state.usersPage.pagination.filters
}
