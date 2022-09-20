import { Avatar, Button } from "antd"
import { useEffect } from "react"
import { useSelector } from "react-redux"
import { Link, useParams } from "react-router-dom"
import { deleteMessage, getDialogProfile, getMessages } from "../../redux/reducers/messages-reducer"
import { useTypedThunkDispatch } from "../../redux/redux-store"
import { getActiveDialogMessages, getDialogProfileSelect } from "../../redux/selectors/messages-selector"
//@ts-ignore
import noAvatar from '../../assets/noAvatar.png'
import { LeftOutlined } from '@ant-design/icons';
import { getAuthProfile } from "../../redux/selectors/auth-selector"
import DialogAddMessage from "./DialogAddMessage"

const Dialog = () => {
    const userId = useParams().id
    const thunkDispatch = useTypedThunkDispatch()
    const dialogProfile = useSelector(getDialogProfileSelect)
    const authProfile = useSelector(getAuthProfile)
    const activeDialog = useSelector(getActiveDialogMessages)
    useEffect(()=> {
        if(userId) {
            thunkDispatch(getDialogProfile(+userId))
            thunkDispatch(getMessages(+userId))
        }
    }, [thunkDispatch, userId])
    return <><div className="userDialog">
        <div><Link to='/messages/'><LeftOutlined />Back</Link></div>
        <div className="name"><Link to={`/profile/${dialogProfile?.userId}`}>{dialogProfile?.fullName}</Link><p>last seen:</p></div>
        <div className="avatar"><Link to={`/profile/${dialogProfile?.userId}`}><Avatar src={dialogProfile?.photos.small || noAvatar} /></Link></div>
    </div>
        <div className="userDialogMessages">
            {activeDialog.length > 0 ? activeDialog.map(message => {
                        return <div key={message.id} className={message.viewed ? 'block' : 'block notRead'}>
                            <div className="avatar">
                                <Avatar src={message.senderId === authProfile?.userId ? authProfile.photos.small || noAvatar : dialogProfile?.photos.small || noAvatar}  size={40}/>
                            </div>
                            <div className="heading">
                                <Link to={`/profile/${message.senderId}`}>{message.senderName}</Link>
                                <span> {message.addedAt.substring(11, 5)}</span>
                            </div>
                            <div className="body">
                                <p>{message.body}</p>
                            </div>
                            {message.senderId === authProfile?.userId ? 
                            <div className="delete">
                                <Button size='small' onClick={()=> thunkDispatch(deleteMessage(message.id))}>x</Button>
                            </div>:
                             null}
                        </div>
            }): <p>not messages</p>}
            

        <div>
            <DialogAddMessage userId={dialogProfile?.userId || 1}/>
        </div>
        </div></>
}
export default Dialog