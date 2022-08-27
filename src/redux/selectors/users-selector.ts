import { AppStateType } from "../redux-store";

export const getCurrentUsers = (state: AppStateType) => {
  return state.usersPage.currentUsers;
};
export const getIsFollowingProcess = (state: AppStateType) => {
    return state.usersPage.isFollowingProcess;
  };