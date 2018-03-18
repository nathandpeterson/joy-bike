import React, { Component } from 'react'
import { Button, Panel } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Login from './Login'
import './index.css'

class Landing extends Component {

    render(){
        return (
            <div className='hero'>
                <h2>JOY BIKE</h2>
                <Link to='/guest'>
                    <Button className='guest landing-buttons'>continue as guest</Button>
                </Link>
                <Login />
                <Link to='/'>
                    <Button className='landing-buttons'>sign up</Button>
                </Link>
            </div>
        )
    }
}

export default Landing