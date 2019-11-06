import { combineReducers, createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import events from './events'


const rootReducer = combineReducers( { events } )
const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    :
    compose
const enhancer = composeEnhancers( applyMiddleware( thunk ) )


export const store = createStore( rootReducer, enhancer )