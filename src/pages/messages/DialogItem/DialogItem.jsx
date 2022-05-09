import React from 'react';
import styles from './DialogItem.module.scss'
import { Link } from 'react-router-dom';
const DialogItem = (props) => {
    return (
        <div className={styles.dialogItem}>
            <Link to={props.id}>{props.name}</Link>
        </div>
    )
}
export default DialogItem