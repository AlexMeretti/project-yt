const ADD_POST = "ADD-POST";
const ADD_POST_ON_CHANGE_STATE = "ADD-POST-ON-CHANGE-STATE";

const profileReducer = (state, action) => {
  switch (action.type) {
    case ADD_POST:
      const newPost = {
        id: 3,
        author: "Alex",
        message: state.addPostMessage,
        likes: 0,
      };
      state.posts.push(newPost);
      state.addPostMessage = "";
      return state;
    case ADD_POST_ON_CHANGE_STATE:
      state.addPostMessage = action.currentMessage;
      return state;
    default:
      return state;
  }
};
export const addPostAction = () => ({
  type: ADD_POST,
});
export const addPostOnChangeAction = (currentMessage) => ({
  type: ADD_POST_ON_CHANGE_STATE,
  currentMessage: currentMessage,
});
export default profileReducer;
