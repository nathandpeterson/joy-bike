import React, { Component } from 'react'
import { FormControl, FormGroup, Button } from 'react-bootstrap'


class LoginForm extends Component {
    state = {email: '', password: ''}

    fields = ['email', 'password']

    handleSubmit = (e) => {
        e.preventDefault()
        this.setState({email: '', password: ''})
    }

    handleChange = (e) => {
        const field = e.target.getAttribute('data-tag')
        this.setState({[field]: e.target.value})
    }
    renderField = (field, i) => {
        return <FormGroup key={i}>
                    <FormControl
                        type={field}
                        data-tag={field}
                        value={this.state[field]}
                        placeholder={field}
                        onChange={this.handleChange}
                    />  
                </FormGroup>
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                {this.fields.map((field, i) => this.renderField(field, i))}
                <Button onClick={this.handleSubmit}>Submit</Button>
            </form>
        )
    }
}

export default LoginForm