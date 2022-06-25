const ADD_POST = "ADD-POST";
const ADD_POST_CHANGE = "ADD-POST-CHANGE";

let initialState = {
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
  addPostCurrentText: "",
};
const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      const newPost = {
        id: 3,
        author: "Alex",
        message: state.addPostCurrentText,
        likes: 0,
      };
      state.posts.push(newPost);
      state.addPostCurrentText = "";
      return state;
    case ADD_POST_CHANGE:
      state.addPostCurrentText = action.currentText;
      return state;
    default:
      return state;
  }
};
export const addPostAction = () => ({
  type: ADD_POST,
});
export const addPostChangeAction = (currentText) => ({
  type: ADD_POST_CHANGE,
  currentText: currentText,
});
export default profileReducer;
