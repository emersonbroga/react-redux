import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';

import HomeReducer from 'Screens/Home/HomeReducer';

const store = createStore(HomeReducer, applyMiddleware(ReduxPromise));

export default store;
