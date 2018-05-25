import React from 'react';
import { Link } from 'react-router-dom'
import {
    InfiniteLoader,
    Swiper,
    FlexItem,
    Flex
} from 'react-weui';
import '../asset/index.css'
import List from './homeList.js'
import Footer from './footer.js'
class Home extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
            demoIndex: 0
        };
	}
	render() {

		return (
			<div className="app">
				<header className={'header'}>
					<span className={'more'}>更多</span>
					<div className={'search'}>
						<span>搜索商品</span>
					</div>
				</header>
				<Swiper
						height={180}
                   	>
						<div>
							<img src={require('../asset/images/s1.png')}/>
						</div>
						<div>
							<img src={require('../asset/images/s2.png')}/>
						</div>
						<div>
							<img src={require('../asset/images/s3.png')}/>
						</div>
					</Swiper>
					<List />
					<Footer />
			</div>
		)
	}
}

export default Home
