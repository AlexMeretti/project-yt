import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"
import { getIsAuth } from "../../redux/selectors/auth-selector"
import Dialogs from "./Dialogs"

const MessagesPage = () => {
    const isAuth = useSelector(getIsAuth)
    if(isAuth) {
        return <div className="messagesPage"><Dialogs /></div>
    } else return <Navigate to='/'/>

}
export default MessagesPage