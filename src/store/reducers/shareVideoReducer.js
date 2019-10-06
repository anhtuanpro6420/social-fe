import { SHARE_VIDEO_REQUEST, SHARE_VIDEO_SUCCESS } from '../actions/types';
import { openNotification } from '../../components/Notification/notification';

const initialState = {
	success: false,
	data: null,
	isLoading: false
};
const reducer = (state = initialState, action) => {
	switch (action.type) {
		case SHARE_VIDEO_REQUEST: {
			return {
				...state,
				isLoading: true
			};
		}
		case SHARE_VIDEO_SUCCESS: {
			openNotification('success', 'Share video successfully!');
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
