import React,{ Component } from 'react';
import ReactDOM from 'react-dom'
import registerServiceWorker from './registerServiceWorker';

import {Provider} from 'react-redux';
import store from './store/index';
import Car from './container/car.js';

class App extends Component {
	render() {
		return (
			<Car />
		)
	}
}

ReactDOM.render( <Provider store={store}>  
        			<App />  
    	    	</Provider>,document.getElementById('root'));

registerServiceWorker();
