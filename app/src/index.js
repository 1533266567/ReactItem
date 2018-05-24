import React,{ Component } from 'react';
import ReactDOM from 'react-dom'
import registerServiceWorker from './registerServiceWorker';
import Routers from './router'
import {Provider} from 'react-redux';
import store from './store/index';

import App from './components/App.js';

import 'weui';
import 'react-weui/build/packages/react-weui.css';

import Test from './test/index'


// ReactDOM.render( <Provider store={store}>  
// 					<Routers />
//     	    	</Provider>,document.getElementById('root'));


ReactDOM.render( <Test />,document.getElementById('root'));