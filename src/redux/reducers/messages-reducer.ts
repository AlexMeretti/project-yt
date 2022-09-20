import { profileAPI } from './../../api/profile-api';
import { dialogsAPI } from './../../api/dialogs-api';
import { BaseThunkType, InferActionTypes } from '../redux-store';
import { DialogsType, MessagesType, ProfileType } from './../../types/types';

let initialState = {
  dialogs: [] as Array<DialogsType>,
  dialogProfile: null as null | ProfileType,
  activeDialog: [] as Array<MessagesType>
};
export type MessagesInitialStateType = typeof initialState
const messagesReducer = (state = initialState, action: ActionsTypes): MessagesInitialStateType => {
  switch (action.type) {
    case 'DELETE_MESSAGE' : {
      debugger
      return {
        ...state, activeDialog: [...state.activeDialog.filter(dialog => dialog.id !== action.messageId)]
      }
    }
    case 'SEND_MESSAGE': {
      return {
        ...state, activeDialog: [...state.activeDialog, action.message]
      }
    }
    case 'SET_DIALOGS': {
      return { ...state, dialogs: [...action.dialogs]};
    }
    case 'SET_DIALOG_PROFILE': {
      return {
        ...state, dialogProfile: action.profile
      }
    }
    case 'SET_ACTIVE_DIALOG': {
      return {
        ...state, activeDialog: [...action.messages]
      }
    }
    default:
      return state;
  }
};

export default messagesReducer;

export const getDialogs = (): ThunkType => {
  return async (dispatch) => {
    const response = await dialogsAPI.getDialogs();
    dispatch(messagesActions.setDialogs(response))
  };
};
export const getMessages = (userId: number): ThunkType => {
  return async (dispatch) => {
    const response = await dialogsAPI.getMessages(userId);
    dispatch(messagesActions.setActiveDialog(response.items))
  };
};
export const getDialogProfile = (userId: number): ThunkType => {
  return async (dispatch) => {
    const response = await profileAPI.getProfile(userId);
    dispatch(messagesActions.setDialogProfile(response))
  };
};
export const startChat = (userId: number): ThunkType => {
  return async (dispatch) => {
    await dialogsAPI.startMessaging(userId);
  };
};
export const sendMessage = (userId: number, body: string): ThunkType => {
  return async (dispatch) => {
    const response = await dialogsAPI.sendMessage(userId, body);
    if(response.resultCode === 0) {
      dispatch(messagesActions.sendMessage(response.data.message))
    } else console.error('error!')
    
  };
};
export const deleteMessage = (messageId: string): ThunkType => {
  return async (dispatch) => {
    const response = await dialogsAPI.deleteMessage(messageId);
    console.log(response)
    if(response.resultCode === 0) {
      dispatch(messagesActions.deleteMessage(messageId))
    }
  };
};
type ThunkType = BaseThunkType<ActionsTypes>
type ActionsTypes = InferActionTypes<typeof messagesActions>
const messagesActions = {
  deleteMessage: (messageId: string) => ({
    type: 'DELETE_MESSAGE',
    messageId,
  } as const),
  sendMessage: (message: MessagesType) => ({
    type: 'SEND_MESSAGE',
    message,
  } as const),
  setDialogs: (dialogs: Array<DialogsType>) => ({
    type: 'SET_DIALOGS',
    dialogs
  } as const),
  setActiveDialog: (messages: Array<MessagesType>) => ({
    type: 'SET_ACTIVE_DIALOG',
    messages
  } as const),
  setDialogProfile: (profile: ProfileType) => ({
    type: 'SET_DIALOG_PROFILE',
    profile
  } as const),
  addMessageChange: (currentText: string) => ({
    type: 'ADD_MESSAGE_CHANGE',
    currentText: currentText,
  } as const)
}