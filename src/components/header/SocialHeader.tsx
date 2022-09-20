import 'antd/dist/antd.css';
import { useSelector } from 'react-redux';
import { getIsAuth } from '../../redux/selectors/auth-selector';
import HeaderAuth from './isAuth/HeaderAuth';
import HeaderNotAuth from './isAuth/HeaderNotAuth';
import HeaderMenu from './HeaderMenu';
const SocialHeader = () => {
  const isAuth = useSelector(getIsAuth);
  return (
    <div className='header'>
    {isAuth ? <HeaderAuth /> : <HeaderNotAuth />}
    <HeaderMenu />
    </div>
  )
}


export default SocialHeader;