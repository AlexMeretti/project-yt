import React from "react";
import styles from "./MyPosts.module.scss";
import SomePost from "./SomePost";

const UserPosts = (props) => {
  const elementPosts = props.profilePage.posts.map((el) => (
    <SomePost
      author={el.author}
      message={el.message}
      key={el.id}
      likes={el.likes}
      avatar={props.profilePage.profile.photos.small}
    />
  ));
  const addPostChange = (e) => {
    props.addPostChange(e.target.value);
  };
  return (
    <div className={styles.block}>
      <div className={styles.heading}>Posts</div>
      {props.owner && (
        <div className={styles.postAdd}>
          <div className={styles.blockTextArea}>
            <textarea
              onChange={addPostChange}
              value={props.profilePage.addPostCurrentText}
              placeholder="Enter your post"
            />
          </div>
          <div className={styles.blockButton}>
            <button className="button1" onClick={() => props.addPost()}>
              Add Message
            </button>
          </div>
        </div>
      )}
      <div className={styles.someposts}>{elementPosts}</div>
    </div>
  );
};
export default UserPosts;
