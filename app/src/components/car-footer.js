import React from 'react';
import '../asset/index.css'

class CarFooter extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<footer>
				<div className="footer-left">
					<div className="all-choose">
						<i className="product_icon"></i>
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

export default CarFooter;