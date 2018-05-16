import React,{ Component } from 'react';
import ReactDOM from 'react-dom'
import registerServiceWorker from './registerServiceWorker';
import Routers from './router'
import {Provider} from 'react-redux';
import store from './store/index';
import App from './components/App.js';


ReactDOM.render( <Provider store={store}>  
					<Routers />
    	    	</Provider>,document.getElementById('root'));

registerServiceWorker();
