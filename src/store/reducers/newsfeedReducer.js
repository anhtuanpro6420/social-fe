import {
	GET_POSTS_REQUEST,
	GET_POSTS_SUCCESS,
	FATEVORITES_SUCCESS,
	GET_POST_DETAIL_REQUEST,
	GET_POST_DETAIL_SUCCESS
} from '../actions/types';
import { updateHelper } from '../../core/utils/helpers';

const initialState = {
	success: false,
	error: null,
	data: null,
	isLoading: false,
	detailPost: null
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
		case GET_POST_DETAIL_REQUEST: {
			return {
				...state
			};
		}
		case GET_POST_DETAIL_SUCCESS: {
			return {
				...state,
				detailPost: action.payload
			};
		}
		default:
			return state;
	}
};

export default reducer;
