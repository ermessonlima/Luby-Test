import {createStore} from 'redux';

import  Reducers from './redurcers/index';
const store = createStore(Reducers);
export default store;