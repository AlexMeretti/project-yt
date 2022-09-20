import { AppStateType } from "../redux-store";

export const getDialogsSelect  = (state: AppStateType) => {
    return state.messagesPage.dialogs
  };
export const getDialogProfileSelect  = (state: AppStateType) => {
    return state.messagesPage.dialogProfile
  };
export const getActiveDialogMessages = (state: AppStateType) => {
  return state.messagesPage.activeDialog
}