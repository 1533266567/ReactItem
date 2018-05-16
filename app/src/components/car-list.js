import React from 'react';
import { connect } from 'react-redux'
import { getProduct,selectProduct,addProductNum,reduceProductNum } from '../store/car/car-action';
import '../asset/index.css';

class CarList extends React.Component {
	constructor(props) {
		super(props)
	}
	changeIconState(index) {
		this.props.selectProduct(index);
	}
	addAcount(index) {
		this.props.addProductNum(index);
	}
	reudceAcount(index) {
		this.props.reduceProductNum(index);
	}
	componentWillMount() {
		this.props.getProduct();
	}
	render () { 
		return (  
			<div className="car-list">
				<ul>
					<h3 className="product-title">王先生的店</h3>
					{  this.props.proData.dataList.map((ele,index)=>
						<li key={index}>
							<div className="product-content">
								<i className={`product_icon ${ele.selectStatus ? 'on' : ''}`} onClick={this.changeIconState.bind(this,index)}></i>
								<img src={ele.imgurl}/>
								<div className="product-info">
									<h3>{ele.title}</h3>
									<span className="price">¥{ele.price}</span>
									<div className="opeat-btn">
										<span onClick={this.reudceAcount.bind(this,index)}>-</span>
										<input value={ele.num} readOnly/>
										<span onClick={this.addAcount.bind(this,index)}>+</span>
									</div>	
								</div>
							</div>
						</li>
					) }
				</ul>
			</div>
		)
	}
}

export default connect( state => ({ proData: state.proData,}),{getProduct,selectProduct,addProductNum,reduceProductNum} )(CarList);