import React from 'react';
import styles from './SomeFriend.module.scss'
const SomeFriend = (props) => {
   return(
        <div className={styles.block}>
            <p>{props.name}</p>
            <img src={props.photo} alt={props.alt}/>
        </div>
   )
}
export default SomeFriend