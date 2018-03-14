import React from 'react'
import { Panel } from 'react-bootstrap'

const NavPreview = ({ ebike }) => {

        return  <Panel className='thumbnail nav-preview-container'>
                    <img className='nav-preview-img' 
                        src={ebike.img_url}
                        alt={ebike.title}/>
                    <h4>{ebike.brand}</h4>
                </Panel>
}

export default NavPreview