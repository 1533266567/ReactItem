import * as pro from './action-type';
import CarDataList from '../../api/car.js'

let defaultState = {
  /**
   * 商品数据
   * @type {Array}
   * example: [{
   *    title: "PaiBot（2G/32G)", 商品名称
   *    price: 2999, 商品价格
   *    selectStatus: true, 是否选择
   *    num: 1, 选择数量
   * }]
   */
  dataList: [],
}

export const proData = (state = defaultState,action) => {
	let dataList;
	let dataItem;
	switch(action.type) {
		case pro.GETPRODUCTION:
			 return Object.assign({},state,{
			 	dataList:[
			 		...CarDataList
			 	]
			 })

		case pro.TOGGLESELECT:
			return Object.assign({},state,{
				dataList: state.dataList.map((item,index)=>{
					if(index == action.index) {
						return Object.assign({},item,{
							selectStatus: !item.selectStatus
						})
					}
					return item;
				})

			})

		case pro.SELECTALLPRO:
			return Object.assign({},state,{
				dataList: state.dataList.map((item,index)=>{
					return Object.assign({},item,{
						selectStatus: !item.selectStatus
					})
				})

			})

		case pro.ADDPRONUM:
			return Object.assign({},state,{
				dataList: state.dataList.map((item,index)=>{
					if(index == action.index) {
						return Object.assign({},item,{
							num: ++item.num
						})
					}
					return item;
					
				})
			})

		case pro.REDUCEPRONUM:
			return Object.assign({},state,{
				dataList: state.dataList.map((item,index)=>{
					if(index == action.index) {
						let result = item.num <= 0 ? Object.assign({},item,{ num: 0}) : Object.assign({},item,{num: --item.num});
						return result;
					}
					return item;	
				})
			})

		default: 
      		return state;
	}
}