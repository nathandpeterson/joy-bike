import React, { Component } from 'react'
import MainImage from './MainImage'
import MainText from './MainText'
import { ebike } from '../../data/fixtures'
import './index.css'

class Main extends Component {

    render(){
         return <div className='container main'>
                    <MainImage img={ ebike.img_url }/>
                    <MainText />
                </div>
    }
}

export default Main