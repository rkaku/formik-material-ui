import React from 'react'
import ReactDOM from 'react-dom'
import './styles/index.css'
import { BrowserRouter, Route, Switch } from "react-router-dom"
import { Provider } from 'react-redux'
import { store } from './redux/reducers/store'
import Blockchain from './pages/Blockchain'
import Wallet from './pages/Wallet'
import Pool from './pages/Pool'
import About from './pages/About'


ReactDOM.render(
  <Provider store={ store }>
    <BrowserRouter>
      <Switch>
        <Route path="/wallet" component={ Wallet } />
        <Route path="/pool" component={ Pool } />
        <Route path="/chain" component={ Blockchain } />
        <Route path="/" component={ About } />
      </Switch>
    </BrowserRouter>
  </Provider>
  , document.getElementById( 'root' )
)