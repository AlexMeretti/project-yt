import React from "react";
import styles from "./MyPosts.module.scss";
import SomePost from "./SomePost";
import {
  addPostAction,
  addPostOnChangeAction,
} from "../../../../redux/profileReducer";

const MyPosts = (props) => {
  const elementPosts = props.posts.map((el) => (
    <SomePost
      author={el.author}
      message={el.message}
      key={el.id}
      likes={el.likes}
    />
  ));

  const addPost = () => {
    props.dispatch(addPostAction());
  };
  const addPostOnChange = (event) => {
    const currentMessage = event.target.value;
    props.dispatch(addPostOnChangeAction(currentMessage));
  };
  return (
    <div className={styles.block}>
      <div className={styles.heading}>My Posts</div>
      <div className={styles.postAdd}>
        <div className={styles.blockTextArea}>
          <textarea
            onChange={addPostOnChange}
            value={props.addPostMessage}
            placeholder="Enter your post"
          />
        </div>
        <div className={styles.blockButton}>
          <button className="button1" onClick={addPost}>
            Add Message
          </button>
        </div>
      </div>
      <div className={styles.someposts}>{elementPosts}</div>
    </div>
  );
};
export default MyPosts;
