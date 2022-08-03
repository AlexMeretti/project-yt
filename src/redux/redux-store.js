import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import messagesReducer from "./messages-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";
import thunkMiddleware from "redux-thunk";
import { reducer as formReducer } from "redux-form";

let reducers = combineReducers({
  profilePage: profileReducer,
  sidebar: sidebarReducer,
  messagesPage: messagesReducer,
  usersPage: usersReducer,
  auth: authReducer,
  form: formReducer,
});

let store = legacy_createStore(reducers, applyMiddleware(thunkMiddleware));
export default store;
