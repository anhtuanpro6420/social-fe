import {
	GET_POSTS_REQUEST,
	GET_POSTS_SUCCESS,
	FATEVORITES_SUCCESS
} from '../actions/types';
import { updateHelper } from '../../core/utils/helpers';

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
		case FATEVORITES_SUCCESS: {
			return {
				...state,
				data: updateHelper(state, action)
			};
		}
		default:
			return state;
	}
};

export default reducer;
