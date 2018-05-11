import React from 'react';
import '../asset/index.css'
import CarList from '../components/car-list'
import CarFooter from '../components/car-footer'

class Car extends React.Component {
	render() {
		return (
			<div className="car">
				<header className="car-header">
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