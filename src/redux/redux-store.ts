
import { Action, applyMiddleware, combineReducers, legacy_createStore } from "redux";
import messagesReducer from "./reducers/messages-reducer";
import profileReducer from "./reducers/profile-reducer";
import usersReducer from "./reducers/users-reducer";
import authReducer, { ActionsTypes } from "./reducers/auth-reducer";
import thunkMiddleware, { ThunkAction, ThunkDispatch } from "redux-thunk";
import appReducer from "./reducers/app-reducer";
import { useDispatch } from "react-redux";

let rootReducer = combineReducers({
  app: appReducer,
  profilePage: profileReducer,
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
