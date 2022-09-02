import { Link } from "react-router-dom";
// @ts-ignore 
import styles from "./scss/UserElement.module.scss";
// @ts-ignore 
import noAvatar from "../../assets/noAvatar.png";
import { FC } from "react";
import { PhotosType } from "../../types/types";
import { useSelector } from "react-redux";
import { getIsFollowingProcess } from "../../redux/selectors/users-selector";
import { useTypedThunkDispatch } from "../../redux/redux-store";
import { followThunk, unfollowThunk } from "../../redux/users-reducer";

type UserElementType = {
  photos: PhotosType
  name: string
  id: number
  status: string
  followed: boolean
}
const UserElement: FC<UserElementType> = ({
  photos,
  name,
  id,
  status,
  followed,
}) => {
  const isFollowingProcess = useSelector(getIsFollowingProcess)
  const dispatch = useTypedThunkDispatch()
  return (
    <div className={styles.usersBlock}>
      <div className={styles.avatar}>
        <img src={photos.small ? photos.small : noAvatar} alt={name} />
      </div>
      <div className={styles.description}>
        <p className={styles.name}>
          <Link to={`/profile/` + id}>{name}</Link>
        </p>
        <p className={styles.status}>{status}</p>
      </div>
      <div className={styles.toggleButtons}>
        {followed ? (
          <button
            disabled={isFollowingProcess.some((FollowId) => FollowId === id)}
            className={styles.removeFriendButton}
            onClick={() => {
              dispatch(unfollowThunk(id));
            }}
          >
            Remove friend
          </button>
        ) : (
          <button
            disabled={isFollowingProcess.some((FollowId) => FollowId === id)}
            className={styles.addFriendButton}
            onClick={() => {
              dispatch(followThunk(id));
            }}
          >
            Add friend
          </button>
        )}
      </div>
    </div>
  );
};
export default UserElement;
