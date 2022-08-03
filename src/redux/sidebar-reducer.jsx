let initialState = {
  menu: [
    { id: "1", link: "/profile", name: "Profile" },
    { id: "2", link: "/messages", name: "Messages" },
    { id: "3", link: "/users", name: "Users" },
    { id: "4", link: "/news", name: "News" },
    { id: "5", link: "/music", name: "Music" },
    { id: "6", link: "/settings", name: "Settings" },
  ],
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
const sidebarReducer = (state = initialState, action) => {
  return state;
};

export default sidebarReducer;
