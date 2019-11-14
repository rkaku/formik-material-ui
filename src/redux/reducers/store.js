import { combineReducers, createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import blockchain from './blockchain'


const rootReducer = combineReducers( { blockchain } )
const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    :
    compose
const enhancer = composeEnhancers( applyMiddleware( thunk ) )


export const store = createStore( rootReducer, enhancer )