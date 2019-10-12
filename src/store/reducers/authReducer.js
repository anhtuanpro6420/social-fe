import { LOGIN_REQUEST, LOGIN_SUCCESS } from '../actions/types';

const initialState = {
	success: false,
	data: null,
	isLoading: false
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
		default:
			return state;
	}
};

export default reducer;
