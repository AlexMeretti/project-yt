const ADD_POST = "ADD-POST";
const ADD_POST_ON_CHANGE_STATE = "ADD-POST-ON-CHANGE-STATE";
const DIALOGS_ADD_MESSAGE = "DIALOGS-ADD-MESSAGE";
const ON_CHANGE_ADD_MESSAGE_STATE = "ON-CHANGE-ADD-MESSAGE-STATE";
let store = {
  _state: {
    messagesPage: {},
    profilePage: {
      posts: [
        {
          id: 1,
          author: "Alex",
          message: "Modi quidem tenetur dolorum eaque numquam cumque cum.",
          likes: "10",
        },
        {
          id: 2,
          author: "Alex",
          message: "Quidem cum aperiam corrupti id neque quis!",
          likes: "5",
        },
      ],
      addPostMessage: "",
    },
    sidebar: {
      menu: [
        { id: "1", link: "/profile", name: "Profile" },
        { id: "2", link: "/messages", name: "Messages" },
        { id: "3", link: "/news", name: "News" },
        { id: "4", link: "/music", name: "Music" },
        { id: "5", link: "/settings", name: "Settings" },
      ],
    },
    social: {
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
      messages: [
        {
          id: "1",
          message:
            "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet",
        },
        { id: "2", message: "Pellentesque eu iaculis ex." },
        { id: "3", message: "Morbi ullamcorper consectetur lacinia." },
      ],
      addMessage: "",
    },
  },
  _rerenderEntireTree() {
    console.log("State changed");
  },
  subcribe(observer) {
    this._rerenderEntireTree = observer;
  },
  getState() {
    return this._state;
  },
  dispatch(action) {
    if (action.type === "ADD-POST") {
      const newPost = {
        id: 3,
        author: "Alex",
        message: this._state.profilePage.addPostMessage,
        likes: 0,
      };
      this._state.profilePage.posts.push(newPost);
      this._state.profilePage.addPostMessage = "";
      this._rerenderEntireTree(this._state);
    }
    if (action.type === "ADD-POST-ON-CHANGE-STATE") {
      this._state.profilePage.addPostMessage = action.currentMessage;
      this._rerenderEntireTree(this._state);
    }
    if (action.type === "DIALOGS-ADD-MESSAGE") {
      const newMessage = {
        id: "4",
        message: this._state.social.addMessage,
      };
      this._state.social.messages.push(newMessage);
      this._state.social.addMessage = "";
      this._rerenderEntireTree(this._state);
    }
    if (action.type === "ON-CHANGE-ADD-MESSAGE-STATE") {
      this._state.social.addMessage = action.currentMessage;
      this._rerenderEntireTree(this._state);
    }
  },
};

export const addPostAction = () => ({
  type: ADD_POST,
});
export const addPostOnChangeAction = (currentMessage) => ({
  type: ADD_POST_ON_CHANGE_STATE,
  currentMessage: currentMessage,
});
export const dialogsAddMessage = () => ({
  type: DIALOGS_ADD_MESSAGE,
});
export const onChangeAddMessageState = (currentMessage) => ({
  type: ON_CHANGE_ADD_MESSAGE_STATE,
  currentMessage: currentMessage,
});
export default store;
