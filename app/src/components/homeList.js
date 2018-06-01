import React from 'react'
import IndexDataList from '../api/homeData'
import '../asset/index.css'

class List extends React.Component {
	constructor(props) { 
		super(props);
	}
	render() {
		let dataList = this.props.productData;
		return (
				<ul className='homelist'>
					{
						dataList.map((ele,index)=>
						<li key={index} className='listPro'>
							<div className='productImg'>
								<img src={ele.imgurl}/>
							</div>
							<div>
								<h3 className='proTitle'>{ele.title}</h3>
								<span className='proPrice'>¥{ele.price}</span>
							</div>
						</li>
					   )
					}
					{
						this.props.moreData 
						? (<div className="loading-wrap"><span className="loading"></span> <em className="loading-tip">加载中...</em></div>) 
						: (<div className="bottom-tip">没有更多商品了~</div>)
					}

				</ul>			
		)
	}
}

export default List