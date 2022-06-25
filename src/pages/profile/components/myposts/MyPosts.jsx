import React from "react";
import styles from "./MyPosts.module.scss";
import SomePost from "./SomePost";

const MyPosts = (props) => {
  const elementPosts = props.state.posts.map((el) => (
    <SomePost
      author={el.author}
      message={el.message}
      key={el.id}
      likes={el.likes}
    />
  ));

  const addPost = () => {
    props.onAddPost();
  };
  const addPostChange = (e) => {
    props.onAddPostChange(e.target.value);
  };
  return (
    <div className={styles.block}>
      <div className={styles.heading}>My Posts</div>
      <div className={styles.postAdd}>
        <div className={styles.blockTextArea}>
          <textarea
            onChange={addPostChange}
            value={props.state.addPostCurrentText}
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
