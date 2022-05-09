import React from 'react';
import { Link } from 'react-router-dom';
const ElementMenu = (props) => {
    return (
        <li><Link to={props.link} key={props.id}>{props.name}</Link></li>
    )
}
export default ElementMenu