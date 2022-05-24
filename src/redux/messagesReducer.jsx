const DIALOGS_ADD_MESSAGE = "DIALOGS-ADD-MESSAGE";
const ON_CHANGE_ADD_MESSAGE_STATE = "ON-CHANGE-ADD-MESSAGE-STATE";

const messagesReducer = (state, action) => {
  switch (action.type) {
    case DIALOGS_ADD_MESSAGE:
      const newMessage = {
        id: "4",
        message: state.addMessage,
      };
      state.messages.push(newMessage);
      state.addMessage = "";
      return state;
    case ON_CHANGE_ADD_MESSAGE_STATE:
      state.addMessage = action.currentMessage;
      return state;
    default:
      return state;
  }
};

export const dialogsAddMessage = () => ({
  type: DIALOGS_ADD_MESSAGE,
});
export const onChangeAddMessageState = (currentMessage) => ({
  type: ON_CHANGE_ADD_MESSAGE_STATE,
  currentMessage: currentMessage,
});

export default messagesReducer;
