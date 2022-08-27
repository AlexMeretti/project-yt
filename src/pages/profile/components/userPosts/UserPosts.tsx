import { FC } from "react";
import { PostsType } from "../../../../types/types";
//@ts-ignore
import styles from "./MyPosts.module.scss";
import SomePost from "./SomePost";
type Propstypes = {
  avatar: string | null
  owner: boolean
  posts?: Array<PostsType>
}
const UserPosts: FC<Propstypes>= ({owner, avatar, posts}) => {
  /* const elementPosts = posts.map((el) => (
    <SomePost
      id={el.id}
      author={el.author}
      message={el.message}
      key={el.id}
      likes={el.likes}
      avatar={avatar}
    />
  )); */
  return (
    <div className={styles.block}>
      <div className={styles.heading}>Posts</div>
      {owner && (
        <div className={styles.postAdd}>
          <div className={styles.blockTextArea}>
            <textarea placeholder="Enter your post" />
          </div>
          <div className={styles.blockButton}>
            <button className="button1" onClick={() => {}}>
              Add Message
            </button>
          </div>
        </div>
      )}
      <p>coming soon</p>
      <div className={styles.someposts}></div>
    </div>
  );
};
export default UserPosts;
