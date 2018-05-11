 import {createStore,combineReducers} from 'redux';
 import  * as production from '../reducer/car-reducer';


 let store = createStore( combineReducers({...production}) );

 export default store;