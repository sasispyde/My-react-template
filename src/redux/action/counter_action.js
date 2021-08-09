import { INCREMENT, DECREMENT, INCREMENT_BY_AMOUNT } from '../actions';

export const increment = () => {
	return {
		type : INCREMENT,
		payload : {}
	}
}

export const decrement = () => {
	return {
		type : DECREMENT,
		payload : {}
	}
}

export const incrementByAmount = (value) => {
	return {
		type : INCREMENT_BY_AMOUNT,
		payload : {
			value
		}
	}
}