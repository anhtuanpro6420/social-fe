import {
	LOGIN_REQUEST,
	LOGIN_SUCCESS,
	GET_MY_INFO_REQUEST,
	GET_MY_INFO_SUCCESS
} from '../actions/types';

const initialState = {
	success: false,
	data: null,
	isLoading: false,
	me: null
};
const reducer = (state = initialState, action) => {
	switch (action.type) {
		case LOGIN_REQUEST: {
			return {
				...state,
				isLoading: true
			};
		}
		case LOGIN_SUCCESS: {
			return {
				...state,
				success: true,
				isLoading: false,
				data: action.payload.data
			};
		}
		case GET_MY_INFO_REQUEST: {
			return {
				...state,
				isLoading: true
			};
		}
		case GET_MY_INFO_SUCCESS: {
			return {
				...state,
				success: true,
				isLoading: false,
				me: action.payload
			};
		}
		default:
			return state;
	}
};

export default reducer;
