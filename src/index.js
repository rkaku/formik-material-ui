import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { BrowserRouter, Route, Switch } from "react-router-dom"
import { Provider } from 'react-redux'
import { store } from './redux/reducers/store'
import EventsIndex from './pages/EventsIndex'
import EventShow from './pages/EventShow'
import EventNew from './pages/EventNew'
import EventEdit from './pages/EventEdit'


ReactDOM.render(
  <Provider store={ store }>
    <BrowserRouter>
      <Switch>
        <EventsIndex />
        {/* <Route path="/event/edit/:id" component={ EventEdit } />
        <Route path="/event/new" component={ EventNew } />
        <Route path="/event/:id" component={ EventShow } />
        <Route path="/events" component={ EventsIndex } /> */}
      </Switch>
    </BrowserRouter>
  </Provider>
  , document.getElementById( 'root' )
)