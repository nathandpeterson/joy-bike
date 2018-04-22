import React, { Component } from 'react'
import { FormControl, FormGroup, Button } from 'react-bootstrap'
import { reduxForm, Field } from 'redux-form'
import { connect } from 'react-redux'
import { addEBike } from '../../actions'


class AddEBike extends Component {

    fields = ['name', 'brand', 'price', 'source_url', 'image_url']

    onSubmit = (e) => {
        e.preventDefault()

    }
    renderField = (field, i) => {
        return <FormGroup key={i}>
                    <Field
                        type="text"
                        name={field}
                        label={field}
                        component={fieldRender}
                    />  
                </FormGroup>
    }

    render(){
        const { handleSubmit } = this.props
        return (
        <div>
            <h3>add a new ebike</h3>
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                {this.fields.map((field, i)=> this.renderField(field, i))}
                <Button onClick={this.onSubmit} type='submit'>SUBMIT</Button>
            </form>
        </div>
        )
    }
}

const fieldRender = ({ meta : { touched, error }, label, input } ) => {
    const errorClass = `form-group ${touched && error ? 'has-error': ''}`
    return ( 
        <div className={errorClass}>
            <label>{touched && error ? error : label }</label>
            <input className='form-control' type='text' {...input} />
        </div>
    )
}

function validate(values){
    const errors = {}
    if(!values.name) { errors.name = 'You must enter a valid name' } 
    if(!values.brand) { errors.brand = 'You must enter a brand' }
    if(!values.price) { errors.price = 'You must enter a price' }
    if(!values.source_url) { errors.source_url = 'You must enter a source url' }
    if(!values.image_url) { errors.image_url = 'You should enter an image url' }
    return errors
}

export default reduxForm({validate, form: 'AddEBike'})(
    connect(null, { addEBike })(AddEBike))