import axios from '../../axios';
import {
	GET_POSTS_REQUEST,
	GET_POSTS_SUCCESS,
	GET_ERRORS,
	FATEVORITES_REQUEST,
	FATEVORITES_SUCCESS
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
				type: GET_ERRORS,
				payload: err.response
			});
		});
};

export const favorites = favoritesData => dispatch => {
	dispatch({
		type: FATEVORITES_REQUEST
	});
	axios
		.post(`/posts/favorites/${favoritesData.postId}`, favoritesData.user)
		.then(res => {
			dispatch({
				type: FATEVORITES_SUCCESS,
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
