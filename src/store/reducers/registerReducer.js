import { REGISTER_REQUEST, REGISTER_SUCCESS } from '../actions/types';

const initialState = {
	success: false,
	data: null,
	isLoading: false
};
const reducer = (state = initialState, action) => {
	switch (action.type) {
		case REGISTER_REQUEST: {
			return {
				...state,
				isLoading: true
			};
		}
		case REGISTER_SUCCESS: {
			return {
				...state,
				success: true,
				isLoading: false
			};
		}
		default:
			return state;
	}
};

export default reducer;
