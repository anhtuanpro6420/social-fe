import {
	GET_POSTS_REQUEST,
	GET_POSTS_SUCCESS,
	GET_POSTS_FAILED
} from '../actions/types';
import { openNotification } from '../../components/Notification/notification';

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
		case GET_POSTS_FAILED: {
			openNotification('error', action.payload);
			return {
				...state,
				success: false,
				isLoading: false,
				error: action.payload
			};
		}
		default:
			return state;
	}
};

export default reducer;
