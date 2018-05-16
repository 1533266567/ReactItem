import React from 'react'
import { Link } from 'react-router-dom'

class Detail extends React.Component {
	constructor(props) {
		super(props);
		console.log(this.props);
	}
	render() {
		return (
			<div>
				这是商品详情{this.props.match.params.id}
			</div>
			
		)
	}
}

export default Detail