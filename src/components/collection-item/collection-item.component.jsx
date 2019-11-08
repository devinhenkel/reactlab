import React from 'react';

import './collection-item.styles.scss';

const CollectionItem = ({id, name, price, imageUrl}) => (
    <div className='collection-item'>
        <div 
            className='collection-item-image'
            style={{
                backgroundImage: `url(${imageUrl})`
            }}
        />
        <div className='collection-item-footer'>
            <span className='collection-item-name'>{name}</span>
            <span className='collection-item-price'>{price}</span>
        </div>
    </div>
)

export default CollectionItem