import { ThunkAction } from "redux-thunk";
import { getAuthDataThunk } from "./auth-reducer";
import { AppStateType, InferActionTypes } from "../redux-store";

let initialState = {
  initialized: false
};
type AppInitialStateType = typeof initialState
const appReducer = (state = initialState, action: ActionsTypes):AppInitialStateType => {
  switch (action.type) {
    case 'INITIALIZED_SUCCESS': {
      return { ...state, initialized: true };
    }
    default:
      return state;
  }
};

export const initializeApp = (): ThunkType => {
  return async (dispatch) => {
    await dispatch(getAuthDataThunk())
    dispatch(appActions.initializedSuccess());
  };
};
export default appReducer;
type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsTypes>
type ActionsTypes = InferActionTypes<typeof appActions>

const appActions = {
  initializedSuccess: () => ({
    type: 'INITIALIZED_SUCCESS', 
  } as const)
}