import React, { Component } from 'react'
import { FormControl, FormGroup, Button } from 'react-bootstrap'
import { signUp } from '../../actions'
import { reduxForm, Field } from 'redux-form'
import { connect } from 'react-redux'

const initialState = {  first_name: '', 
                        last_name: '', 
                        email: '', 
                        password: '', 
                        password_confirm: ''}

class LoginForm extends Component {

    state = {...initialState}

    fields = Object.keys(initialState)

    renderField(field){
        const { meta : { touched, error }, label, input } = field
        const errorClass = `form-group ${touched && error ? 'has-danger': ''}`
        return (
            <div className={errorClass}>
              <label>{label}</label>
              <input className='form-control' type='text' {...input} />
              <div className='form-control-feedback'>
                {touched ? error : ''}
              </div>
            </div>
          ) 
    }

    handleSubmit = (values) => {
        this.props.signUp(values)
        this.setState({...initialState})
    }

    handleChange = (e) => {
        const field = e.target.getAttribute('data-tag')
        this.setState({[field]: e.target.value})
    }
    // renderField = (field, i) => {
    //     const type = field.slice(0,8) === 'password' ? 'password' : 'text'
    //     const placeholder = field.replace(/_/g, " ")
    //     return <FormGroup key={i}>
    //                 <FormControl
    //                     type={type}
    //                     data-tag={field}
    //                     value={this.state[field]}
    //                     placeholder={placeholder}
    //                     onChange={this.handleChange}
    //                 />  
    //             </FormGroup>
    // }

    fieldRender = (field, i) => {
        return <Field key={i} name={field} label={field} component={this.renderField} />
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                {this.fields.map((field, i) => this.fieldRender(field, i))}
                <Button onClick={this.handleSubmit}>Submit</Button>
            </form>
        )
    }
}

function validate(values){
    const errors = {}
    if(!values.first_name) { errors.first_name = 'You must enter your first name' } 
    if(!values.last_name) { errors.last_name = 'You must enter your last name' }
    if(!values.email) { errors.email = 'You must enter a valid email' }
    if(!values.password) { errors.password = 'You must enter a password' }
    if(!values.password_confirm) { errors.password_confirm = 'You must enter a password' }
    return errors
}

export default reduxForm({validate, form: 'SignupForm'})(
    connect(null, { signUp })(LoginForm))