import messagesReducer from "./messagesReducer";
import profileReducer from "./profileReducer";
import sidebarReducer from "./sidebarReducer";

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
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.social = messagesReducer(this._state.social, action);
    this._state.sidebar = sidebarReducer(this._state.sidebar, action);
    this._rerenderEntireTree(this._state);
  },
};

export default store;
