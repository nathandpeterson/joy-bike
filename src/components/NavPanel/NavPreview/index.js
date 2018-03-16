import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { setSelectedBike } from '../../../actions'
import { Panel } from 'react-bootstrap'

const NavPreview = ( { ebike, setSelectedBike} ) => {
        return  <Panel  className='thumbnail nav-preview-container'
                        onClick={ () => setSelectedBike(ebike) }>
                    <img className='nav-preview-img' 
                        src={ebike.img_url}
                        alt={ebike.title}/>
                    <h4>{ebike.brand}</h4>
                </Panel>
}

function mapDispatchToProps(dispatch){
    return bindActionCreators( {setSelectedBike} , dispatch)
}

export default connect(null, mapDispatchToProps)(NavPreview)