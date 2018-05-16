import React from 'react';
import { connect } from 'react-redux'
import { selectAllProduct } from '../store/car/car-action'
import '../asset/index.css'

class CarFooter extends React.Component {
	constructor(props) {
		super(props)
	}
	onChoseAll() {
		this.props.selectAllProduct();
	}
	render() {
		let isAllChose = this.props.proData.dataList.every((ele)=>{
			return ele.selectStatus == true
		})
		return (
			<footer>
				<div className="footer-left">
					<div className="all-choose" onClick={this.onChoseAll.bind(this)}>
						<i className={`product_icon ${isAllChose ? 'on':''}` }></i>
						<span>全选</span>
					</div>
					<div className="footer-price">
						<span>
                         总计: <em>12312312</em>
                        </span>
						<span className="footer_tip">(不含运费)</span>
					</div>
				</div>
				<div className="footer-right">
					<span>去结算</span>
					<em>(1件)</em>
				</div>
			</footer>
		)
	}
}

export default connect( state => ({ proData: state.proData,}),{selectAllProduct} )(CarFooter);