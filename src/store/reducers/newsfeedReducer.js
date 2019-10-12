import { GET_POSTS_REQUEST, GET_POSTS_SUCCESS } from '../actions/types';

const initialState = {
	success: false,
	error: null,
	data: null,
	isLoading: false
};
const reducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_POSTS_REQUEST: {
			return {
				...state,
				isLoading: true
			};
		}
		case GET_POSTS_SUCCESS: {
			return {
				...state,
				success: true,
				isLoading: false,
				data: action.payload
			};
		}
		default:
			return state;
	}
};

export default reducer;
