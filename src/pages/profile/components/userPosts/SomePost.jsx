import React from "react";
import styles from "./SomePost.module.scss";
import noAvatar from "../../noAvatar.png";
const SomePost = (props) => {
  return (
    <div className={styles.block}>
      <div className={styles.avatar}>
        <img
          src={props.avatar !== null ? props.avatar : noAvatar}
          alt="avatar"
        />
      </div>
      <div className={styles.content}>
        <p className={styles.author}>{props.id}</p>
        <p className={styles.text}>{props.message}</p>
        <p>Likes: {props.likes}</p>
      </div>
    </div>
  );
};
export default SomePost;
