//@ts-ignore
import styles from "./SomePost.module.scss";
//@ts-ignore
import noAvatar from "../../../../assets/noAvatar.png";
import { PostsType } from "../../../../types/types";

const SomePost = (props: PostsType) => {
  return (
    <div className={styles.block}>
      <div className={styles.avatar}>
        <img
          src={props.avatar !== null ? props.avatar : noAvatar}
          alt="avatar"
        />
      </div>
      <div className={styles.content}>
        <p className={styles.text}>{props.message}</p>
        <p>Likes: {props.likes}</p>
      </div>
    </div>
  );
};
export default SomePost;
