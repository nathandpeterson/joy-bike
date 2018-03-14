import React, { Component } from 'react'
import { connect } from 'react-redux'
import MainImage from './MainImage'
import MainText from './MainText'

import Header from '../Header'
import NavPanel from '../NavPanel'

import { ebike } from '../../data/fixtures'
import './index.css'

class Main extends Component {

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