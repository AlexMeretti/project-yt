import MyPosts from "./MyPosts";
import {
  addPostAction,
  addPostChangeAction,
} from "../../../../redux/profile-reducer";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    profilePage: state.profilePage,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onAddPost: () => {
      dispatch(addPostAction());
    },
    onAddPostChange: (currentText) => {
      dispatch(addPostChangeAction(currentText));
    },
  };
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);
export default MyPostsContainer;
