import { FC, useState } from "react";
// @ts-ignore
import noAvatar from "../../../../../assets/noAvatar.png";
import { setAvatar } from "../../../../../redux/profile-reducer";
import { useTypedDispatch } from "../../../../../redux/redux-store";
// @ts-ignore
import styles from "./UserAvatar.module.scss";

type PropsTypes = {
  avatar: string | null
  owner: boolean
}
const UserAvatar: FC<PropsTypes> = ({ avatar, owner }) => {
  const dispatch = useTypedDispatch()
  const [profileAvatar, setProfileAvatar] = useState<File>();
  const changeAvatar = (e: React.FormEvent<HTMLInputElement>) => {
    const target= e.target as HTMLInputElement;
    setProfileAvatar((target.files as FileList)[0]);
  };
  const submitAvatar = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(profileAvatar) {
      dispatch(setAvatar(profileAvatar));
    }
  };
  return (
    <div className={styles.avatar}>
      <img alt="img" src={avatar ? avatar : noAvatar}/>
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
export default UserAvatar;
