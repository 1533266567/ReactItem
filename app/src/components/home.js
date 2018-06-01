import React from 'react';
import { Link } from 'react-router-dom'
import Swiper from 'swiper'
import MeScroll from 'mescroll.js'
import 'swiper/dist/css/swiper.css';
import 'mescroll.js/mescroll.min.css';
import '../asset/index.css'

import IndexDataList from '../api/homeData'
import List from './homeList.js'
import Nav from './nav.js'
import Footer from './footer.js'
class Home extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
            demoIndex: 0,
            scrollIndex: 0,
            dataList: IndexDataList,
            mescroll: null,
            isMore: true
        };
	}
	componentDidMount() {
		let mySwiper = new Swiper('.swiper-container', {
			autoplay: false,//可选选项，自动滑动
			pagination: {
			    el: '.swiper-pagination',
			  },
		})
		 let mescroll = new MeScroll("body", {
                up: {
                    auto: false, //初始化不加载
                    callback: this.addMoreData.bind(this), //上拉回调
                },
                down: {
                    use: false,
                }
            });
		this.setState({mescroll: mescroll})
	}
	addMoreData() {
		let i = this.state.scrollIndex;
		setTimeout( ()=> {
            if( i < 5){
               this.setState({
					dataList: this.state.dataList.concat(IndexDataList),
					scrollIndex: ++this.state.scrollIndex
				}) 
               this.state.mescroll.endSuccess();
            }else {
            	this.setState({
            		isMore: false
            	})
            	this.state.mescroll.endErr();
            }
           
        }, 1000)

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
					<div className="banner-swiper">	
						<div className="swiper-container">
						  <div className="swiper-wrapper">
						    <div className="swiper-slide"><img src={require('../asset/images/s1.png')}/></div>
						    <div className="swiper-slide"><img src={require('../asset/images/s2.png')}/></div>
						    <div className="swiper-slide"><img src={require('../asset/images/s3.png')}/></div>
						  </div>
						  <div className="swiper-pagination"></div>
						</div>
					</div>
					<Nav />
					<List productData = {this.state.dataList} moreData={this.state.isMore}/>

					<Footer />
				</div>
		)
	}
}

export default Home
