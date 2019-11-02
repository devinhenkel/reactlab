import React, { Component } from 'react';
import './menuitem.style.scss'

export const MenuItem = (props) => {
    return (
        <div className='menu-item'>
            <div className='content'>
                <h1 className='title'>{props.title}</h1>
                <span className='subtitle'>{props.subtitle}</span>
            </div>
        </div>
    )
}
