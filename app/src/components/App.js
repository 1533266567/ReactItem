import React from 'react';
import Car from './car';
import Home from './home'
import Product from './product'
import Detail from './detail'
import { Route } from 'react-router-dom'

class App extends React.Component {
	render() {
		return (
			<div className="main">
				<Route exact path="/" component={Home} />
				<Route path="/car" component={Car} />
				<Route path="/product" component={Product} />
				<Route path="/detail/:id" component={Detail} />
			</div>
			
		)
	}
}
export default App