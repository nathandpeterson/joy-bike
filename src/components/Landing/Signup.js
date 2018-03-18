import React from 'react'
import { Panel } from 'react-bootstrap'

const Signup = () => {
    return (
        <Panel className='landing-buttons'>
            <Panel.Heading>
                <Panel.Title toggle>
                    sign up
                </Panel.Title>
            </Panel.Heading>
                <Panel.Collapse>
                    <Panel.Body className='form-body'>
                        sign up form
                    </Panel.Body>
                </Panel.Collapse>
        </Panel>
    )
}

export default Signup
