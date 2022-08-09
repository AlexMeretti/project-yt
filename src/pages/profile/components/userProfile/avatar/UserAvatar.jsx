import { useState } from "react";
import noAvatar from "./noAvatar.png";
import styles from "./UserAvatar.module.scss";
const UserPhoto = ({ avatar, owner, setAvatar }) => {
  const [profileAvatar, setProfileAvatar] = useState("");
  const changeAvatar = (e) => {
    setProfileAvatar(e.target.files[0]);
  };
  const submitAvatar = (e) => {
    e.preventDefault();
    setAvatar(profileAvatar);
  };
  return (
    <div className={styles.avatar}>
      <img alt="img" src={avatar || noAvatar} />
      {owner && (
        <div className={styles.avatarUpload}>
          <form onSubmit={submitAvatar}>
            <input type="file" onChange={changeAvatar} />
            <button>upload avatar</button>
          </form>
        </div>
      )}
    </div>
  );
};
export default UserPhoto;
