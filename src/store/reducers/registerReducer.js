import {
	REGISTER_REQUEST,
	REGISTER_SUCCESS,
	REGISTER_FAILED
} from '../actions/types';
import { openNotification } from '../../components/Notification/notification';

const initialState = {
	success: false,
	error: null,
	data: [],
	isLoading: false
};
const reducer = (state = initialState, action) => {
	switch (action.type) {
		case REGISTER_REQUEST: {
			return {
				...state
			};
		}
		case REGISTER_SUCCESS: {
			return {
				...state,
				...action.payload
			};
		}
		case REGISTER_FAILED: {
			openNotification('error', action.payload.message);
			return {
				...state,
				error: action.payload
			};
		}
		default:
			return state;
	}
};

export default reducer;
