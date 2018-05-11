import * as pro from './action-type';

export const getProduct = index => {
	return {
		type: pro.GETPRODUCTION,
	}
}
export const selectProduct = index => {
	return {
		type: pro.TOGGLESELECT,
		index
	}
}