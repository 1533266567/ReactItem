import React from 'react'
import IndexDataList from '../api/homeData'
import styles from '../asset/index.css'

class List extends React.Component {

	render() {
		return (
				<ul className={styles.homelist}>
					{
						IndexDataList.map((ele,index)=>
							<li key={index} className={styles.listPro}>
								<div className={styles.productImg}>
									<img src={ele.imgurl}/>
								</div>
								<div>
									<h3 className={styles.proTitle}>{ele.title}</h3>
									<span className={styles.proPrice}>¥{ele.price}</span>
								</div>
							</li>
						)
					}
				</ul>
		)
	}
}

export default List