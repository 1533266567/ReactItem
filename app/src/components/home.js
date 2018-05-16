import React from 'react';
import { Link } from 'react-router-dom'

class Home extends React.Component {
	render() {

		return (
			<div>
				this is Home
				<Link to="/car">购物车</Link>
				<Link to="/product">商品列表</Link>
			</div>
		)
	}
}

export default Home
