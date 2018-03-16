import React from 'react'
import { Panel } from 'react-bootstrap'

const logger = (e) => {
    console.log(e.target)
}

const NavPreview = ({ ebike }) => {

        return  <Panel className='thumbnail nav-preview-container'
                        onClick={logger}>
                    <img className='nav-preview-img' 
                        src={ebike.img_url}
                        alt={ebike.title}/>
                    <h4>{ebike.brand}</h4>
                </Panel>
}

export default NavPreview