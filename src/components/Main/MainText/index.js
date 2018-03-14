import React from 'react'
import { Panel } from 'react-bootstrap'

const data = { ebike: {
    brand: 'Geero',
    title: 'Vintage Vinyl Black',
    price_num: 2398.99,
    price_unit: 'euro',
    rating: 4.75, 
    features: ['Hidden battery & motor', 
                'Range of distance up to 125 km', 
                'Fully charged in only 3 hours',
                'Frame Size 52cm']
    }
}

const MainText = (props) => {
    const { brand, title, price_num, price_unit, rating, features } = data.ebike 
    return (
        <div className='main-text'>
            <Panel>
                <Panel.Heading>{brand}  {title}</Panel.Heading>
                <Panel.Body>{price_num} {price_unit}</Panel.Body>
            </Panel>
        </div>
    )
}

export default MainText