import React, { Component } from 'react';
import './menuitem.style.scss'

export const MenuItem = (props) => {
    return (
        <div className={`${props.size} menu-item`}>
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
