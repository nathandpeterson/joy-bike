import React, { Component } from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducers from '../../reducers'
import { Switch, BrowserRouter, Route } from 'react-router-dom'
import Main from '../Main'
import AddEBike from '../AddEBike'
import Landing from '../Landing'
import '../../index.css'

const store = createStore(reducers)
store.subscribe(() => console.log('store', store.getState()))

class App extends Component {

    render(){
        return (
            <Provider store={store}>
               <BrowserRouter>
                    <Switch>
                        <Route exact path='/new' component={ AddEBike } />
                        <Route exact path = '/guest' component={ Main }/>                        <Route path='/' component={ Landing} />
                    </Switch>
                </BrowserRouter>
            </Provider>
        )
    }
}

export default App