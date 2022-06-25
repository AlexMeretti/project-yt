import { combineReducers, legacy_createStore } from "redux";
import messagesReducer from "./messages-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";

let reducers = combineReducers({
  profilePage: profileReducer,
  sidebar: sidebarReducer,
  messagesPage: messagesReducer,
});
let store = legacy_createStore(reducers);
export default store;
