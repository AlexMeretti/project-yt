import React from 'react';
import ElementMenu from './ElementMenu';
import styles from './LeftMenu.module.scss'

const LeftMenu = (props) => {
    const elementMenu = props.menu.map(el => <ElementMenu key ={el.id} link={el.link} name={el.name}/>)
    return (
                <div className={styles.leftMenu}>
                    <nav>
                        <ul>
                            { elementMenu }
                        </ul>
                    </nav>
                </div>
    )
}
export default LeftMenu