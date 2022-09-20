import React, { FC, useEffect } from "react";
import { useSelector } from "react-redux";
import { getProfileStatus } from "../../../redux/selectors/profile-selector";
import { useTypedThunkDispatch } from "../../../redux/redux-store";
import { setProfileStatus } from "../../../redux/reducers/profile-reducer";
import { Button } from "antd";

type PropsTypes = {
  owner: boolean
}
const UserStatus: FC<PropsTypes> = ({owner}) => {
  const initialStatus = useSelector(getProfileStatus)
  const dispatch = useTypedThunkDispatch()
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
    <div className='userStatus'>
      {editMode ? (
        <div className='statusEdit'>
          <input
            onChange={onChangeStatus}
            autoFocus={true}
            value={status}
          ></input>
          <Button size='small' type='primary' onClick={updateStatus}>v</Button>
          <Button size='small' danger onClick={() => setEditMode(false)}>x</Button>
        </div>
      ) : (
        <div className='status'>{owner ? <span className='statusOwner' onClick={() => setEditMode(true)}>{initialStatus || 'no status, update?'}</span> : <span className='statusNotOwner'>{initialStatus || 'no status'}</span>}</div>
      )}
    </div>
  );
};
export default UserStatus;
