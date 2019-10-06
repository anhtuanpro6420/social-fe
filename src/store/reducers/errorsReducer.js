import * as Types from '../actions/types';

const initialState = {};

export default function(state = initialState, action) {
	switch (action.type) {
		case Types.GET_ERRORS:
			console.log(action);
			// if (action.payload.status === 401 && action.payload.data === 'Unauthorized') {
			//     storageService.removeAuth();
			// }
			return action.payload;
		default:
			return state;
	}
}
