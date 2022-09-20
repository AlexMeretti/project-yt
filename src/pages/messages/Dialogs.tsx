import { Avatar, Badge} from "antd"
import { useEffect } from "react"
import { useSelector } from "react-redux"
import { Link} from "react-router-dom"
import { getDialogs } from "../../redux/reducers/messages-reducer"
import { useTypedThunkDispatch } from "../../redux/redux-store"
import { getDialogsSelect } from "../../redux/selectors/messages-selector"
//@ts-ignore
import noAvatar from '../../assets/noAvatar.png'

const Dialogs = () => {
    const thunkDispatch = useTypedThunkDispatch()
    useEffect(() => {
        thunkDispatch(getDialogs())
    }, [thunkDispatch])
    const dialogs = useSelector(getDialogsSelect)
    console.log(dialogs)
    return (
    <div className="messagesBlock">
        <h1>Dialogs</h1>
        <div className="dialogItems">
        {dialogs.length > 0 ? dialogs.map(item => {
          return <div className="dialogItem" key={item.id}>{item.newMessagesCount > 0 ? <Badge size='small' count={item.newMessagesCount} className='badge'><Avatar src={item.photos.small || noAvatar} className='avatar'/></Badge>: <Avatar src={item.photos.small || noAvatar} className='avatar'/>}<Link to={`/messages/${item.id}`}>{item.userName} <span>{item.lastDialogActivityDate.substring(0,10)}</span></Link></div>
      }): <p>skeleton</p>}
        </div>
      </div>
    )
}

export default Dialogs