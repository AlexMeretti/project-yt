//@ts-ignore
import styles from './DialogItem.module.scss'
import { Link } from 'react-router-dom';
import { FriendsType } from '../../../types/types';
const DialogItem = (props: FriendsType) => {
    return (
        <div className={styles.dialogItem}>
            
            <div className={styles.dialogImg}>
                <img src={props.photo} alt={props.photo}/>
            </div>
            <div className={styles.dialogContent}>
            <Link to={props.id}>{props.name}</Link>
            <p>last messg..</p>
            </div>
           
        </div>
    )
}
export default DialogItem