import React from 'react';
import '../asset/index.css'
import CarList from './car-list'
import CarFooter from './car-footer'

class Car extends React.Component {
	render() {
		return (
			<div className="car">
				<header className="car-header">
					<i className="icon-back"></i>
					<h2>购物车</h2>
					<span className="edit">编辑</span>
				</header>
				<CarList />
				<CarFooter />
			</div>
		)
	}
}

export default Car;