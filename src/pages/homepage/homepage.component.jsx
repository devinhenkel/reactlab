import React from 'react';
import './homepage.style.scss'

import {MenuItem} from '../../components/menuitem/menuitem.component'

const HomePage = () => {
    return (
    <div className='homepage'>
        <div className='directory-menu'>
            <MenuItem title="Breakfast" subtitle="sausage" />
            <MenuItem title="Brunch" subtitle="sausage" />
            <MenuItem title="Lunch" subtitle="sausage" />
            <MenuItem title="Dinner" subtitle="sausage" />
            <MenuItem title="Desert" subtitle="sausage" />

        </div>
    </div>
    )
}

export default HomePage