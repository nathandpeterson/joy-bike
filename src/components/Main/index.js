import React, { Component } from 'react'
import MainImage from './MainImage'
import MainText from './MainText'
import './index.css'

class Main extends Component {

    render(){
        return (
            <div className='container main'>
                <MainImage />
                <MainText />
            </div>
        )
    }
}

export default Main