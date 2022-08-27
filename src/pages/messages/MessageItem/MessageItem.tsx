import { MessagesType } from '../../../types/types'
//@ts-ignore
import styles from './MessageItem.module.scss'

const MessageItem = (props: MessagesType) => {
    return (
        <div className={styles.messages}>
                <p>{props.message}</p>
            </div>
    )
}
export default MessageItem