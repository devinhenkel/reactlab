import React from 'react';
import MenuItem from '../menuitem/menuitem.component'
import './menu.styles.scss'


class Menu extends React.Component {
    constructor() {
        super();

        this.state = {
            sections: [
                {
                    title: 'Breakfast',
                    subtitle: 'sausage',
                    imageurl: 'https://www.thedailymeal.com/sites/default/files/2019/01/18/0-Utah-MAIN2.jpg',
                    id: 1,
                    linkUrl: 'shop'
                },
                {
                    title: 'Brunch',
                    subtitle: 'french toast',
                    imageurl: 'https://assets3.thrillist.com/v1/image/2821172/size/gn-gift_guide_variable_c.jpg',
                    id: 2,
                    linkUrl: ''
                },
                {
                    title: 'Lunch',
                    subtitle: 'sandwich',
                    imageurl: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/190322-ham-sandwich-horizontal-1553721016.png',
                    id: 3,
                    linkUrl: ''
                },
                {
                    title: 'Dinner',
                    subtitle: 'beef',
                    imageurl: 'https://www.bakerssquare.com/wp-content/uploads/sites/3/2018/03/BSQ-Seared-Steak-Tip-Dinner-Menu-750x400.jpg',
                    id: 4,
                    size: 'large',
                    linkUrl: ''
                },
                {
                    title: 'Desert',
                    subtitle: 'ice cream',
                    imageurl: 'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2006/10/9/0/bh0204_passionberry1.jpg.rend.hgtvcom.826.620.suffix/1371584130151.jpeg',
                    id: 5,
                    size: 'large',
                    linkUrl: ''
                }
            ]
        }
    }

    render() {
        return (
            <div className='directory-menu'>
                {
                    this.state.sections.map(({title, subtitle, imageurl, id, size, linkUrl}) => (
                        <MenuItem 
                            key={id} 
                            title={title} 
                            subtitle={subtitle} 
                            imageurl={imageurl} 
                            size={size} 
                            linkUrl={linkUrl}
                        />
                    ))
                }
            </div>
        )
    }
}

export default Menu