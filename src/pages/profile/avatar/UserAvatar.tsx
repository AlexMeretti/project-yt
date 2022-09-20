import { Button } from "antd";
import { FC, useState } from "react";
import { useSelector } from "react-redux";
import { LockOutlined } from '@ant-design/icons';
// @ts-ignore
import noAvatar from "../../../assets/noAvatar.png";
import { useTypedThunkDispatch } from "../../../redux/redux-store";
import { getIsAuth } from "../../../redux/selectors/auth-selector";
import { useNavigate } from "react-router-dom";
import { setAvatar } from "../../../redux/reducers/profile-reducer";

type PropsTypes = {
  avatar: string | null
  owner: boolean
}
const UserAvatar: FC<PropsTypes> = ({ avatar, owner }) => {
  const navigate = useNavigate();
  const isAuth = useSelector(getIsAuth)
  const dispatch = useTypedThunkDispatch()
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
    <div className='userAvatar'>
      {isAuth ? <></>: <div className='hidden'>
        <LockOutlined style={{fontSize: '22px'}}/>
        <p>Authorization is required for viewing</p>
        <Button onClick={()=> navigate('/')}>Login</Button></div>}
      <img alt="img" src={avatar ? avatar : noAvatar}/>
      {owner && (
        <div className='avatarUpload'>
          <form onSubmit={submitAvatar}>
            <input type="file" onChange={changeAvatar} />
            {profileAvatar && <button>upload avatar</button>}
          </form>
        </div>
      )}
    </div>
  );
};
export default UserAvatar;
