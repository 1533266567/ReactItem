import React from 'react'
import { Route,Link } from 'react-router-dom'


class Product extends React.Component {
	render() {
		let arr = [1,2,3,4,5];  
		return (
			<div>
				这是商品列表<br />
				{ arr.map((ele,index)=>
					<div key={index}>
						<Link to={`/detail/${index}`}>商品详情{index}</Link>
						{/*<Link to={{pathname:'/detail',query:{ index: index}}}>商品详情{index}</Link>*/}
					</div>
				)}

			</div>
			
		)
	}
}

export default Product