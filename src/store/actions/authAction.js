import axios from '../../axios';
import {
	LOGIN_REQUEST,
	LOGIN_SUCCESS,
	GET_ERRORS,
	GET_MY_INFO_REQUEST,
	GET_MY_INFO_SUCCESS
} from './types';

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
				payload: err.response.data
			});
		});
};

export const getMyInfo = () => dispatch => {
	dispatch({
		type: GET_MY_INFO_REQUEST
	});
	axios
		.get('/auth/me')
		.then(res => {
			dispatch({
				type: GET_MY_INFO_SUCCESS,
				payload: res.data
			});
		})
		.catch(err => {
			console.log(err);
		});
};
