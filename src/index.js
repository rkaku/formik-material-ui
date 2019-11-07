import React from 'react'
import ReactDOM from 'react-dom'
import './styles/index.css'
import { BrowserRouter, Route, Switch } from "react-router-dom"
import { Provider } from 'react-redux'
import { store } from './redux/reducers/store'
import Blockchain from './pages/Blockchain'
import Wallet from './pages/Wallet'
import Mining from './pages/Mining'
import About from './pages/About'


ReactDOM.render(
  <Provider store={ store }>
    <BrowserRouter>
      <Switch>
        <Route path="/about" component={ About } />
        <Route path="/mining" component={ Mining } />
        <Route path="/wallet" component={ Wallet } />
        <Route path="/" component={ Blockchain } />
      </Switch>
    </BrowserRouter>
  </Provider>
  , document.getElementById( 'root' )
)