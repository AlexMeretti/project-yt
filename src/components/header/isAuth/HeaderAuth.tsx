import { useSelector } from "react-redux";
import { logout } from "../../../redux/reducers/auth-reducer";
import {
  getAuthProfile,
} from "../../../redux/selectors/auth-selector";
import Fetching from "../../common/fetching/Fething";
//@ts-ignore
import noAvatar from "../../../assets/noAvatar.png";
import { useTypedThunkDispatch } from "../../../redux/redux-store";
import { Button, Dropdown, Menu, PageHeader, Tag } from "antd";
import { MoreOutlined } from '@ant-design/icons';
const HeaderAuth = () => {
  const menu = (
    <Menu
      items={[
        {key: '1',label: (<Button type='primary' onClick={() => dispatch(logout())}>Logout</Button>)}
      ]}
    />
  );
  const DropdownMenu = () => (
    <Dropdown key="more" overlay={menu} placement="bottomRight">
      <Button type="text" icon={<MoreOutlined style={{fontSize: 20}}/>}/>
    </Dropdown>
  );

  const authProfile = useSelector(getAuthProfile);
  const dispatch = useTypedThunkDispatch()
  if (!authProfile) {
    return <Fetching />;
  } else
    return (
<PageHeader
    onBack={() => window.history.back()}
    title={authProfile.fullName} 
    avatar={{src: authProfile.photos.small || noAvatar}}
    extra={<DropdownMenu key="more" />}
    tags={<Tag color="green">Online</Tag>}
  />
    );
};

export default HeaderAuth;
