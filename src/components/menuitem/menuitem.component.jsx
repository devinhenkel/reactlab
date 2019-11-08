import React from 'react';
import { withRouter } from 'react-router-dom';
import './menuitem.style.scss'

const MenuItem = ({history, match, ...props}) => {
    return (
        <div className={`${props.size} menu-item`} onClick={() => {history.push(`${props.linkUrl}`)}}>
            <div 
                className='menu-background' 
                style={{
                backgroundImage: `url(${props.imageurl})`
                }}/>
            <div className='content'>
                <h1 className='title'>{props.title}</h1>
                <span className='subtitle'>{props.subtitle}</span>
            </div>
        </div>
    )
}

export default withRouter(MenuItem);
