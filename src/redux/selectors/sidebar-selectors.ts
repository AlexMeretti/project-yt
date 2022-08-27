import { AppStateType } from "../redux-store";

export const getSidebarMenu = (state: AppStateType) => {
  return state.sidebar.menu;
};