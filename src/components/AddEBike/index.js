import React, { Component } from 'react'
import { FormControl, FormGroup, Button } from 'react-bootstrap'


export default class AddEBike extends Component {

    state = {title: '', brand: '', price: '', source_url: '', image_url: ''}
    fields = ['title', 'brand', 'price', 'source_url', 'image_url']

    handleChange = (e) => {
        const field = e.target.getAttribute('data-tag')
        this.setState({[field]: e.target.value})
    }
    handleSubmit = (e) => {
        e.preventDefault()
        console.log(this.state)
    }
    renderField = (field, i) => {
        return <FormGroup key={i}>
                    <FormControl
                        type="text"
                        data-tag={field}
                        value={this.state[field]}
                        placeholder={field}
                        onChange={this.handleChange}
                    />  
                </FormGroup>
    }

    render(){
        return (
        <div>
            <form onSubmit={this.handleSubmit}>
                {this.fields.map((field, i)=> this.renderField(field, i))}
                <Button type='submit'>SUBMIT</Button>
            </form>
        </div>
        )
    }
}
