 import {createStore,combineReducers} from 'redux';
 import  * as production from './car/car-reducer';


 let store = createStore( combineReducers({...production}) );

 export default store;