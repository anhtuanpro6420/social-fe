import axios from '../../axios';
import { LOGIN_REQUEST, LOGIN_SUCCESS, GET_ERRORS } from './types';

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
				type: GET_ERRORS,
				payload: err.response
			});
		});
};
