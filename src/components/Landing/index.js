import React, { Component } from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Login from './Login'
import Signup from './Signup'
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
                <Signup />
            </div>
        )
    }
}

export default Landing