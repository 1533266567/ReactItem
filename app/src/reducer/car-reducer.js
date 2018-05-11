import * as pro from '../action/action-type';
import CarDataList from '../mock/car.js'

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
			 state.dataList = CarDataList;
			 return state;

		case pro.TOGGLESELECT:
			dataList = JSON.parse( JSON.stringify(state.dataList));

			dataList[action.index].selectStatus = !dataList[action.index].selectStatus;

			return { ...state.dataList,dataList };

		default: 
      		return state;
	}
}