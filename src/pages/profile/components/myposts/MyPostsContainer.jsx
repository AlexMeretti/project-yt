import MyPosts from "./MyPosts";
import {
  addPostAction,
  addPostChangeAction,
} from "../../../../redux/profile-reducer";
const MyPostsContainer = (props) => {
  let state = props.store.getState().profilePage;
  const onAddPost = () => {
    props.dispatch(addPostAction());
  };
  const onAddPostChange = (currentText) => {
    props.dispatch(addPostChangeAction(currentText));
  };
  return (
    <MyPosts
      state={state}
      onAddPost={onAddPost}
      onAddPostChange={onAddPostChange}
    />
  );
};
export default MyPostsContainer;
