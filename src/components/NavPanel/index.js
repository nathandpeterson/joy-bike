import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { loadBikes } from '../../actions'

import NavPreview from './NavPreview'
import './index.css'

class NavPanel extends Component {

    componentDidMount(){
        if(!this.props.ebikes.length) this.props.loadBikes()
    }

    render(){
        
        if(!this.props.ebikes.length) return <div />
        const { ebikes } = this.props
        return (
            <div className='container nav-panel'>
               {ebikes.map(ebike => {
                   return <NavPreview   key={ebike.id} 
                                        ebike={ebike} />
               })}
            </div>
        )
    }
}

function mapStateToProps(state){
    return { ebikes: state.ebikes }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({ loadBikes }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps )(NavPanel)