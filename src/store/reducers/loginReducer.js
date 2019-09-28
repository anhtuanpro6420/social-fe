import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILED } from '../actions/types';
import { openNotification } from '../../components/Notification/notification';

const initialState = {
	success: false,
	error: null,
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
		case LOGIN_FAILED: {
			openNotification('error', action.payload.message);
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
