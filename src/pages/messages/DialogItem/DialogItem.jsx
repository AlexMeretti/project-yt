import React from 'react';
import styles from './DialogItem.module.scss'
import { Link } from 'react-router-dom';
const DialogItem = (props) => {
    return (
        <div className={styles.dialogItem}>
            
            <div className={styles.dialogImg}>
                <img src={props.photo} alt={props.alt}/>
            </div>
            <div className={styles.dialogContent}>
            <Link to={props.id}>{props.name}</Link>
            <p>last messg..</p>
            </div>
           
        </div>
    )
}
export default DialogItem