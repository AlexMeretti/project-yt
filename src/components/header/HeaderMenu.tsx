import { Menu } from "antd"
import { Link, useLocation } from "react-router-dom"
import { MailOutlined, ProfileOutlined, UserSwitchOutlined, WechatOutlined} from '@ant-design/icons';
const HeaderMenu = () => {
    const location = useLocation().pathname.split('/')[1]
    const selectedKey = [location]
    return  <Menu mode="horizontal" selectedKeys={selectedKey}>
    <Menu.Item key="profile" icon={<UserSwitchOutlined />}>
      <Link to='/profile'>Profile</Link>
    </Menu.Item>
    <Menu.Item key="messages" icon={<MailOutlined />}>
      <Link to='/messages'>Messages</Link>
    </Menu.Item>
    <Menu.Item key="users" icon={<ProfileOutlined />}>
    <Link to='/users'>Users</Link>
    </Menu.Item>
    <Menu.Item key="chat" icon={<WechatOutlined />}>
    <Link to='/chat'>Online chat</Link>
    </Menu.Item>
  </Menu>
}

export default HeaderMenu