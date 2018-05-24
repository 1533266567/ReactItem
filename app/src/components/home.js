import React from 'react';
import { Link } from 'react-router-dom'
import { Carousel,WingBlank   } from 'antd-mobile'
import styles from '../asset/index.css'
import List from './homeList.js'
class Home extends React.Component {
	state = {
		style: {
			width: '30px',
			height: '30px',
			color: 'blue'
		}
	}
	render() {

		return (
			<div id="app">
				<header className={styles.header}>
					<span className={styles.more}>更多</span>
					<div className={styles.search}>
						<span>搜索商品</span>
					</div>
				</header>
				<WingBlank >
					<Carousel autoplay={false} dotStyle={this.state.style} infinite>
					    <div className={styles.swiperwrap}>
					    	<img src={require('../asset/images/s1.png')} />
					    </div>
					    <div className={styles.swiperwrap}>
					    	<img src={require('../asset/images/s3.png')} />
					    </div>
					     <div className={styles.swiperwrap}>
					    	<img src={require('../asset/images/s2.png')} />
					    </div>
					</Carousel>
				</WingBlank>
				<List />
			</div>
		)
	}
}

export default Home
