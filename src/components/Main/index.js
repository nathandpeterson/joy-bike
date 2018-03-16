import React, { Component } from 'react'
import { connect } from 'react-redux'
import MainImage from './MainImage'
import MainText from './MainText'

import Header from '../Header'
import NavPanel from '../NavPanel'

import { setBike, loadBikes } from '../../actions'

import { ebike } from '../../data/fixtures'

import './index.css'

class Main extends Component {

    componentDidMount(){
        // import loadBikes from actions
        // Load bikes from fixtures/API 
        console.log(this.props)
    }

    render(){
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
    return { bike: state.bike }
}

export default connect(mapStateToProps, null)(Main)