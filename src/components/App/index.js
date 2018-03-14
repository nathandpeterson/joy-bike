import React, { Component } from 'react'

import Header from '../Header'
import Main from '../Main'
import NavPanel from '../NavPanel'

class App extends Component {

    render(){
        return (
            <div>
                <Header />
                <Main />
                <NavPanel />
            </div>
        )
    }
}

export default App