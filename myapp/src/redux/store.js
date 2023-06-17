import {configureStore} from  '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import rootReducer from './rootReducer';
import logger from 'redux-logger'
const store=configureStore({
    reducer:rootReducer,
    applyMiddleware:[thunk,logger]
})

export default store;