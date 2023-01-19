import { combineReducers } from 'redux';
import { addressReducer } from './Address';

export const rootReducer = combineReducers({
    pickUp: addressReducer
});