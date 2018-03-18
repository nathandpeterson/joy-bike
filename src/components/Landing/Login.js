import React from 'react'
import { Panel } from 'react-bootstrap'
import LoginForm from './LoginForm'

const Login = () => {
    return (
        <Panel className='landing-buttons'>
            <Panel.Heading>
                <Panel.Title toggle>
                    login
                </Panel.Title>
            </Panel.Heading>
                <Panel.Collapse>
                    <Panel.Body className='form-body'>
                        <LoginForm />
                    </Panel.Body>
                </Panel.Collapse>
        </Panel>
    )

}

export default Login
