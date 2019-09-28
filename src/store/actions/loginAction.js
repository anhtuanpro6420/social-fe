import axios from '../../axios';
import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILED } from './types';

export const login = userData => dispatch => {
	dispatch({
		type: LOGIN_REQUEST
	});
	axios
		.post('/auth/login', userData)
		.then(res => {
			dispatch({
				type: LOGIN_SUCCESS,
				payload: res.data
			});
		})
		.catch(err => {
			dispatch({
				type: LOGIN_FAILED,
				payload: err.response.data
			});
		});
};
