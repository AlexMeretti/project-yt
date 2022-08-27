import { MenuType } from './../types/types';

let initialState = {
  menu: [
    { id: 1, link: "/profile", name: "Profile" },
    { id: 2, link: "/messages", name: "Messages" },
    { id: 3, link: "/users", name: "Users" },
  ] as Array<MenuType>
};
type SidebarInitialStateType = typeof initialState
const sidebarReducer = (state = initialState, action: any): SidebarInitialStateType => {
  return state;
};

export default sidebarReducer;
