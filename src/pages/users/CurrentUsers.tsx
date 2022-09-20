import { Avatar, Button} from "antd";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useTypedThunkDispatch } from "../../redux/redux-store";
import { getCurrentUsers, getIsFollowingProcess } from "../../redux/selectors/users-selector";
import { followThunk, unfollowThunk } from "../../redux/reducers/users-reducer";
import { UserAddOutlined, UserDeleteOutlined, SendOutlined } from '@ant-design/icons';
//@ts-ignore
import noAvatar from '../../assets/noAvatar.png'
import { startChat } from "../../redux/reducers/messages-reducer";
type CurrentUsersTypes = {
  totalCount: number
}
const CurrentUsers: React.FC<CurrentUsersTypes> = ({totalCount}) => {
  const currentUsers = useSelector(getCurrentUsers)
  const dispatch = useTypedThunkDispatch()
  let navigate = useNavigate();
  const startMessaging = (userId: number) => {
    dispatch(startChat(userId))
    return navigate(`/messages/${userId}`);
  }
  const isFollowingProcess = useSelector(getIsFollowingProcess)

  return <>
      {currentUsers.length > 0 ? currentUsers.map(user => {
        return <div className="user-item" key={user.id}>
              <div className="info"><Link to={`/profile/` + user.id}>{user.photos.small ? <Avatar src={user.photos.small} /> : <Avatar src={noAvatar} />}{user.name}</Link></div>
              <div className="buttons">{user.followed ? 
              <><Button danger type="primary" icon={<UserDeleteOutlined />} loading={isFollowingProcess.some((FollowId) => FollowId === user.id)} onClick={() => {dispatch(unfollowThunk(user.id))}}></Button>
          <Button type="primary" icon={<SendOutlined />} onClick={()=> startMessaging(user.id)} ></Button></> 
          : 
          <Button type="primary" icon={<UserAddOutlined />} loading={isFollowingProcess.some((FollowId) => FollowId === user.id)} onClick={() => {dispatch(followThunk(user.id))}}></Button>}</div>
        </div>
      }) : <p>no users</p>}
    </>
};

export default CurrentUsers;
