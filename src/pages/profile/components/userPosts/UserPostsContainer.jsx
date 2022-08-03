import { addPost, addPostChange } from "../../../../redux/profile-reducer";
import { connect } from "react-redux";
import UserPosts from "./UserPosts";

const mapStateToProps = (state) => {
  return {
    profilePage: state.profilePage,
  };
};
export default connect(mapStateToProps, { addPost, addPostChange })(UserPosts);
