import React, { Component } from 'react'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import reducers from '../../reducers'
import { Switch, BrowserRouter, Route } from 'react-router-dom'
import axios from 'axios'
import Main from '../Main'
import AddEBike from '../AddEBike'
import Landing from '../Landing'
import Example from '../Transitions/Example'
import { loadBikes } from '../../actions'
import '../../index.css'

const API_DEV = 'http://localhost:5000'

const store = createStore(reducers, applyMiddleware(thunk))
store.subscribe(() => console.log('store', store.getState()))

class App extends Component {

    componentDidMount(){
        if(!this.props.ebikes){
            axios.get(`${API_DEV}/ebikes`)
                .then(res => console.log(res))
        }
    }

    render(){
        return (
            <Provider store={store}>
               <BrowserRouter>
                    <Switch>
                        <Route exact path='/example' component={Example} />
                        <Route exact path='/new-ebike' component={ AddEBike } />
                        <Route exact path='/guest' component={ Main }/>                
                        <Route path='/' component={ Landing} />
                    </Switch>
                </BrowserRouter>
            </Provider>
        )
    }
}

export default App