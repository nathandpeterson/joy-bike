import React, { Component } from 'react'
import { FormControl, FormGroup, Button } from 'react-bootstrap'


class LoginForm extends Component {
    state = {email: '', password: ''}

    handleSubmit = (e) => {
        e.preventDefault()
        this.setState({email: '', password: ''})
    }

    handleChange = (e) => {
        const field = e.target.getAttribute('data-tag')
        console.log(field)
        this.setState({[field]: e.target.value})
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <FormGroup>
                    <FormControl 
                        type='text'
                        value={this.state.text}
                        placeholder='email'
                        onChange={this.handleChange}
                        data-tag='email'/>
                    </FormGroup>
                    <FormGroup>
                    <FormControl 
                        type='password'
                        value={this.state.password}
                        placeholder='password'
                        onChange={this.handleChange}
                        data-tag='password'/>
                    </FormGroup>
                <Button onClick={this.handleSubmit}>Submit</Button>
            </form>
        )
    }

}

export default LoginForm