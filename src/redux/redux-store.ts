
import { Action, applyMiddleware, combineReducers, legacy_createStore } from "redux";
import messagesReducer from "./messages-reducer";
import profileReducer from "./profile-reducer";
import usersReducer from "./users-reducer";
import authReducer, { ActionsTypes } from "./auth-reducer";
import thunkMiddleware, { ThunkAction, ThunkDispatch } from "redux-thunk";
import appReducer from "./app-reducer";
import sidebarReducer from "./sidebar-reducer"
import { useDispatch } from "react-redux";

let rootReducer = combineReducers({
  app: appReducer,
  profilePage: profileReducer,
  sidebar: sidebarReducer,
  messagesPage: messagesReducer,
  usersPage: usersReducer,
  auth: authReducer,
});
export type TypedDispatch = ThunkDispatch<AppStateType, any, ActionsTypes>;
export const useTypedThunkDispatch = () => useDispatch<TypedDispatch>();



type rootReducerType = typeof rootReducer
export type AppStateType = ReturnType<rootReducerType>

export type InferActionTypes<T>= T extends {[keys: string]:(...args: any[]) => infer U} ? U: never
export type BaseThunkType<A extends Action, R = Promise<void>> = ThunkAction<R, AppStateType, unknown, A>


let store = legacy_createStore(rootReducer, applyMiddleware(thunkMiddleware));
export default store;
