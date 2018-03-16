import React, { Component } from 'react'
import { connect } from 'react-redux'
import MainImage from './MainImage'
import MainText from './MainText'

import Header from '../Header'
import NavPanel from '../NavPanel'

import { loadBikes } from '../../actions'

import { ebike } from '../../data/fixtures'

import './index.css'

class Main extends Component {

    componentDidMount(){
        // import loadBikes from actions
        // Load bikes from fixtures/API
        if(!this.props.ebikes.length) this.props.loadBikes()
    }

    render(){
        console.log('ebikes?',this.props.ebikes)
         return <div>
                    <Header />
                    <div className='container main'>
                        <MainImage img={ ebike.img_url }/>
                        <MainText />
                    </div>
                    <NavPanel/>
                </div>
    }
}

function mapStateToProps(state){
    return { ebikes: state.ebikes }
}

export default connect(mapStateToProps, { loadBikes } )(Main)