import React from 'react'
import { Router,Route,Link,BrowserRouter,HashRouter } from 'react-router-dom'
import App from '../components/App'
import Car from '../components/car'
import Home from '../components/home'

export default class RouterConfig extends React.Component {
	render() {
		return (
			<BrowserRouter>
				<Route component={App} />
			</BrowserRouter>
		)
	}
}
