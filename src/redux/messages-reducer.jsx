const ADD_MESSAGE = "ADD-MESSAGE";
const ADD_MESSAGE_CHANGE = "ADD-MESSAGE-CHANGE";

let initialState = {
  messages: [
    {
      id: "1",
      message: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet",
    },
    { id: "2", message: "Pellentesque eu iaculis ex." },
    { id: "3", message: "Morbi ullamcorper consectetur lacinia." },
  ],
  addMessageCurrentText: "",
  friends: [
    {
      id: "1",
      name: "Anna",
      alt: "friend-photo",
      photo:
        "https://sun1-96.userapi.com/s/v1/ig2/6C5ZUbDxfsxRFNfUMVZxU65t68AlrxdX8zaw_jbIBy-owNPIYnwE0fnoG6xSD-0pnL5QzSwgzO8zSRsZWqH0I9cE.jpg?size=400x400&quality=96&crop=258,0,824,824&ava=1",
    },
    {
      id: "2",
      name: "Roman",
      alt: "friend-photo",
      photo:
        "https://sun9-68.userapi.com/s/v1/if1/V78Z7aTgFy71TN42VlUeHX_uYYbJfipzBD6HAzTonkhUVcicULHFo39D9lJrL8Gq3HMLE1bv.jpg?size=1280x960&quality=96&type=album",
    },
    {
      id: "3",
      name: "Valentin",
      alt: "friend-photo",
      photo:
        "https://sun1-85.userapi.com/s/v1/ig2/h0MyxjtnziLlLcypLuCa7AIMpXxXelhtiPnrSJx7LXRSoXe0xNl0EZ6NjW2ZBNdRSJ4jxM1Hapnj38SQRI4mMcxe.jpg?size=785x1080&quality=95&type=album",
    },
  ],
};
const messagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE: {
      const newMessage = {
        id: "4",
        message: state.addMessageCurrentText,
      };
      let stateCopy = { ...state };
      stateCopy.messages = [...state.messages];
      stateCopy.messages.push(newMessage);
      stateCopy.addMessageCurrentText = "";
      return stateCopy;
    }
    case ADD_MESSAGE_CHANGE: {
      let stateCopy = { ...state };
      stateCopy.addMessageCurrentText = action.currentText;
      return stateCopy;
    }
    default:
      return state;
  }
};

export const addMessage = () => ({
  type: ADD_MESSAGE,
});
export const addMessageChange = (currentText) => ({
  type: ADD_MESSAGE_CHANGE,
  currentText: currentText,
});

export default messagesReducer;
