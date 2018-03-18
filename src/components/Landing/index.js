import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Main from '../Main'
import './index.css'

const Landing = () => {
    return (
        <div className='hero'>
            <h2>JOY BIKE</h2>
            <Link to='/guest'>
                <Button className='landing-buttons'>continue as guest</Button>
            </Link>
            <Link to='/login'>
                <Button className='landing-buttons'>log in</Button>
            </Link>
            <Link to='signup'>
                <Button className='landing-buttons'>sign up</Button>
            </Link>
        </div>
    )
}

export default Landing