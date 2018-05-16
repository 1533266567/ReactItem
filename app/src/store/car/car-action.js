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
export const selectAllProduct = () => {
	return {
		type: pro.SELECTALLPRO,
	}
}

export const addProductNum = index => {
	return {
		type: pro.ADDPRONUM,
		index
	}
}
export const reduceProductNum = index => {
	return {
		type: pro.REDUCEPRONUM,
		index
	}
}