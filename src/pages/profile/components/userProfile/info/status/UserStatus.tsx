//@ts-ignore
import styles from "./UserStatus.module.scss";
import React, { FC, useEffect } from "react";
import { useSelector } from "react-redux";
import { getProfileStatus } from "../../../../../../redux/selectors/profile-selector";
import { useTypedDispatch } from "../../../../../../redux/redux-store";
import { setProfileStatus } from "../../../../../../redux/profile-reducer";

const UserStatus: FC = () => {
  const initialStatus = useSelector(getProfileStatus)
  const dispatch = useTypedDispatch()
  const [status, setStatus] = React.useState<string>(initialStatus);
  const [editMode, setEditMode] = React.useState<boolean>(false);
  const onChangeStatus = (e: any) => {
    setStatus(e.target.value);
  };
  const updateStatus = () => {
    dispatch(setProfileStatus(status));
    setEditMode(false);
  };
  useEffect(() => {
    setStatus(initialStatus);
  }, [initialStatus]);
  return (
    <div className={styles.wrapper}>
      {editMode ? (
        <div className={styles.statusEdit}>
          <input
            onChange={onChangeStatus}
            autoFocus={true}
            value={status}
          ></input>
          <span onClick={updateStatus}>v</span>
          <span onClick={() => setEditMode(false)}>x</span>
        </div>
      ) : (
        <div className={styles.status}>
          <span onClick={() => setEditMode(true)}>{initialStatus}</span>
        </div>
      )}
    </div>
  );
};
export default UserStatus;
