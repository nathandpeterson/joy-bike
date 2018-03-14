import React, { Component } from 'react'
import { Panel } from 'react-bootstrap'
import { ebikes } from '../../data/fixtures'
import './index.css'
import NavPreview from './NavPreview';



class NavPanel extends Component {

    render(){
        return (
            <div className='container nav-panel'>
               {ebikes.map(ebike => {
                   return <NavPreview key={ebike.id} ebike={ebike} />
               })}
            </div>
        )
    }
}
    
    export default NavPanel