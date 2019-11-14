import React from 'react'
import { BrowserRouter, Route, Switch } from "react-router-dom"
import { Provider } from 'react-redux'
import { store } from './../redux/reducers/store'
import Blockchain from './Blockchain'
import Wallet from './Wallet'
import Pool from './Pool'
import Home from './Home'
import NavTabs from './../layouts/header/NavTabs'


export default function C () {
  function App () {
    return (
      <>
        <NavTabs />
        <Switch>
          <Route path="/wallet" component={ Wallet } />
          <Route path="/pool" component={ Pool } />
          <Route path="/chain" component={ Blockchain } />
          <Route path="/" component={ Home } />
        </Switch>
      </>
    )
  }
  return (
    <Provider store={ store }>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  )
}