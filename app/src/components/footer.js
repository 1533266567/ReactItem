import React from 'react';
import { Link } from 'react-router-dom'
import { Flex } from 'react-weui';
import '../asset/index.css'
require('../asset/iconfont.js')

class Footer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
            activeIndex: 0
        };
	}
	onChangeColumn(index) {
		this.setState({activeIndex: index});
	}
	render() {
		let footerItem = [  {name:'首页',icon:'#icon-shouye',path:'/'},
							{name:'分类',icon:'#icon-fenlei',path:'/classify'},
							{name:'购物车',icon:'#icon-gouwuche',path:'/car'},
							{name:'我的',icon:'#icon-wode',path:'/member'}
						 ]
		return (
			<footer>
				<div className="footer-wrap">
					{
					   footerItem.map((ele,index)=>
					   	 <div className={`footer-part ${index==this.state.activeIndex?'icon-on':'' } `} key={index}
					   	 	onClick={this.onChangeColumn.bind(this,index)}>
			                <Link to={ele.path}>
			                	<svg className="icon footer-icon" aria-hidden="true">
			                		if()
								  <use xlinkHref={ele.icon}></use>
								</svg>
								<span className="footer-item">{ele.name}</span>
			                </Link>
			            </div>
					   )
		          	}
		        </div>
			</footer>
		)
	}
}

export default Footer;
