import React, { Component } from 'react'
import { Panel } from 'react-bootstrap'

import './index.css'

class NavPanel extends Component {

    render(){
        return (
            <div className='container nav-panel'>
                <Panel>
                Some items and buttons down here
                </Panel>
                
                <Panel>
                Some items and buttons down here
                </Panel>
            </div>
        )
    }
}
    
    export default NavPanel