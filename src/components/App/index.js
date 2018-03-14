import React, { Component } from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducers from '../../reducers'
import { Switch, BrowserRouter, Route } from 'react-router-dom'

import Header from '../Header'
import Main from '../Main'
import NavPanel from '../NavPanel'
import '../../index.css'

const store = createStore(reducers)
store.subscribe(() => console.log('store', store.getState()))

const About = () => <h1>JOYBIKE IS FOR YOU</h1>

class App extends Component {

    render(){
        return (
            <Provider store={store}>
               <BrowserRouter>
                    <Switch>
                        <Route path='/about' component={ About } />
                        <Route path='/' component={ Main } />
                    </Switch>
                </BrowserRouter>
            </Provider>
        )
    }
}

export default App