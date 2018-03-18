import React from 'react'
import { Link } from 'react-router-dom'
import { FormControl, FormGroup, Button } from 'react-bootstrap'

const Login = () => {
    return (
        <div>
            <Link to={'/'}><Button>back</Button></Link>
            <h4>log in</h4>
        </div>
    )
}

export default Login