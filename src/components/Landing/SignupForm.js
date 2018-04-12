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

class SignupForm extends Component {

    state = {...initialState}

    fields = Object.keys(initialState)

    onSubmit(values){
        this.props.signUp(values, () => {
            console.log('redirect me')
        })
    }

    fieldRender(field){
        const { meta : { touched, error }, label, input } = field
        const errorClass = `form-group ${field.touched && field.error ? 'has-danger': ''}`
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

    render(){
        const { handleSubmit } = this.props
        return(
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                <Field name='first_name' label='First Name' component={this.fieldRender} />
                <Field name='last_name' label='Last Name' component ={this.fieldRender} />
                <Field name='email' label='Email' component ={fieldRender} />
                <Field name='password' label='Password' component ={fieldRender} />
                <Button type='submit'>Submit</Button>
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

const fieldRender = ({ meta : { touched, error }, label, input } ) => {
    const errorClass = `form-group ${touched && error ? 'has-error': ''}`
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

export default reduxForm({validate, form: 'SignupForm'})(
    connect(null, { signUp })(SignupForm))