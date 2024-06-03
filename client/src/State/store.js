import {applyMiddleware, combineReducers, legacy_createStore} from 'redux';
import { thunk } from 'redux-thunk';
import { authReducer } from './Auth/reducer';
import { customerPackageReducer } from './Package/reducer';
import { bookingReducer  } from './Booking/reducer';
import { orderReducer } from './Order/reducer';

const rootReducers = combineReducers
({
    auth: authReducer,
    package: customerPackageReducer,
    booking: bookingReducer,
    order: orderReducer
})

export const store = legacy_createStore(rootReducers,applyMiddleware(thunk))