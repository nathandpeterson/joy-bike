import React, { Component } from 'react'
import { FormControl, FormGroup, Button } from 'react-bootstrap'

const initialState = {  first_name: '', 
                        last_name: '', 
                        email: '', 
                        password: '', 
                        password_confirm: ''}

class LoginForm extends Component {

    state = {...initialState}

    fields = Object.keys(initialState)

    handleSubmit = (e) => {
        e.preventDefault()
        this.verifyFields()
        this.setState({...initialState})
    }

    verifyFields = () => {
        // If empty fields, throw err
        // If passwords don't match throw error
    }

    handleChange = (e) => {
        const field = e.target.getAttribute('data-tag')
        this.setState({[field]: e.target.value})
    }
    renderField = (field, i) => {
        const type = field.slice(0,8) === 'password' ? 'password' : 'text'
        const placeholder = field.replace(/_/g, " ")
        return <FormGroup key={i}>
                    <FormControl
                        type={type}
                        data-tag={field}
                        value={this.state[field]}
                        placeholder={placeholder}
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