import { InferActionTypes } from './redux-store';
import { MessagesType, FriendsType } from './../types/types';

let initialState = {
  messages: [
    {
      id: "1",
      message: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet",
    },
    { id: "2", message: "Pellentesque eu iaculis ex." },
    { id: "3", message: "Morbi ullamcorper consectetur lacinia." },
  ] as Array<MessagesType>,
  addMessageCurrentText: "",
  friends: [
    {
      id: "1",
      name: "Anna",
      photo:
        "https://sun1-96.userapi.com/s/v1/ig2/6C5ZUbDxfsxRFNfUMVZxU65t68AlrxdX8zaw_jbIBy-owNPIYnwE0fnoG6xSD-0pnL5QzSwgzO8zSRsZWqH0I9cE.jpg?size=400x400&quality=96&crop=258,0,824,824&ava=1",
    },
    {
      id: "2",
      name: "Roman",
      photo:
        "https://sun9-68.userapi.com/s/v1/if1/V78Z7aTgFy71TN42VlUeHX_uYYbJfipzBD6HAzTonkhUVcicULHFo39D9lJrL8Gq3HMLE1bv.jpg?size=1280x960&quality=96&type=album",
    },
    {
      id: "3",
      name: "Valentin",
      photo:
        "https://sun1-85.userapi.com/s/v1/ig2/h0MyxjtnziLlLcypLuCa7AIMpXxXelhtiPnrSJx7LXRSoXe0xNl0EZ6NjW2ZBNdRSJ4jxM1Hapnj38SQRI4mMcxe.jpg?size=785x1080&quality=95&type=album",
    },
  ] as Array<FriendsType>,
};
export type MessagesInitialStateType = typeof initialState
const messagesReducer = (state = initialState, action: ActionsTypes): MessagesInitialStateType => {
  switch (action.type) {
    case 'ADD_MESSAGE':
      return {
        ...state,
        messages: [
          ...state.messages,
          { id: "4", message: state.addMessageCurrentText },
        ],
        addMessageCurrentText: "",
      };
    case 'ADD_MESSAGE_CHANGE':
      return {
        ...state,
        addMessageCurrentText: action.currentText,
      };
    default:
      return state;
  }
};

export default messagesReducer;
type ActionsTypes = InferActionTypes<typeof messagesActions>
const messagesActions = {
  addMessage: () => ({
    type: 'ADD_MESSAGE',
  } as const),
  addMessageChange: (currentText: string) => ({
    type: 'ADD_MESSAGE_CHANGE',
    currentText: currentText,
  } as const)
}