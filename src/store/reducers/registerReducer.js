import {
	REGISTER_REQUEST,
	REGISTER_SUCCESS,
	REGISTER_FAILED
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
		case REGISTER_FAILED: {
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
