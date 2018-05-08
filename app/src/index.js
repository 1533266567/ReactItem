import React,{ Component } from 'react';
import ReactDOM from 'react-dom'
import registerServiceWorker from './registerServiceWorker';
import Car from './container/car.js'

class App extends Component {
	render() {
		return (
			<Car />
		)
	}
}

ReactDOM.render(<App/ >,document.getElementById('root'));
registerServiceWorker();
