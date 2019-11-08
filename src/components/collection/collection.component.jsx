import React from 'react';
import './collection.styles.scss';
import CollectionItem from '../collection-item/collection-item.component'

const Collection = ({title, items}) => (
    <div className="collection">
        <h1 className="collection-title">{title}</h1>
        <div className="collection-preview">
            {
                items
                .filter((item, idx) => idx < 4)
                .map(({id, ...itemProps}) => (
                    <CollectionItem key={id} {...itemProps} />
                ))
            }
        </div>
    </div>
)

export default Collection