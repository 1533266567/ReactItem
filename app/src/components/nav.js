import React from 'react'
import { Link } from 'react-router-dom'
import navList from '../api/homeNav'
import '../asset/index.css'
class Nav extends React.Component {

	render() {
		return (
			<nav>
				<ul className="nav-list">
					{ 	navList.map((data,index)=>
							<li key={index}>
								<Link to="/">
									<img src={data.imgurl} className="nav-img"/>
									<span className="nav-text">{data.text}</span>
								</Link>
							</li>
						)
					}	
				</ul>
			</nav>
		)
	}

}

export default Nav