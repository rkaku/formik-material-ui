import React from 'react'
import { BrowserRouter, Route, Switch } from "react-router-dom"
import { Provider } from 'react-redux'
import { store } from './../redux/reducers/store'
import Blockchain from './Blockchain'
import Wallet from './Wallet'
import Pool from './Pool'
import Home from './Home'
import NavTabs from './../layouts/header/NavTabs'
import BottomNavigation from './../layouts/header/BotttomNavigation'
import * as ReactRouter from 'react-router-dom'
// import { SnackbarProvider } from 'notistack';


export default function C () {
  function App () {
    const location = ReactRouter.useLocation()
    return (
      <>
        {
          location.pathname !== "/" && <NavTabs />
        }
        <Switch>
          <Route path="/wallet" component={ Wallet } />
          <Route path="/pool" component={ Pool } />
          <Route path="/chain" component={ Blockchain } />
          <Route path="/" component={ Home } />
        </Switch>
        {
          location.pathname !== "/" && <BottomNavigation />
        }
      </>
    )
  }
  return (
    <Provider store={ store }>
      {/* <SnackbarProvider maxSnack={ 3 }> */}
        <BrowserRouter>
          <App />
        </BrowserRouter>
      {/* </SnackbarProvider> */}
    </Provider>
  )
}