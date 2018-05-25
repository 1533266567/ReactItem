import React from 'react'
import IndexDataList from '../api/homeData'
import '../asset/index.css'

class List extends React.Component {

	render() {
		return (
				<ul className='homelist'>
					{
						IndexDataList.map((ele,index)=>
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
				</ul>
		)
	}
}

export default List