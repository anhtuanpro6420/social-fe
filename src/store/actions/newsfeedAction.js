import axios from '../../axios';
import {
	GET_POSTS_REQUEST,
	GET_POSTS_SUCCESS,
	GET_POSTS_FAILED
} from './types';

export const getPosts = () => dispatch => {
	dispatch({
		type: GET_POSTS_REQUEST
	});
	axios
		.get('/posts')
		.then(res => {
			dispatch({
				type: GET_POSTS_SUCCESS,
				payload: res.data
			});
		})
		.catch(err => {
			dispatch({
				type: GET_POSTS_FAILED,
				payload: err.response.data
			});
		});
};
