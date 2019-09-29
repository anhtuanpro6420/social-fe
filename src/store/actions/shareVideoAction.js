import axios from '../../axios';
import axiosOrg from 'axios';

import {
	SHARE_VIDEO_REQUEST,
	SHARE_VIDEO_SUCCESS,
	SHARE_VIDEO_FAILED
} from './types';

export const shareVideo = data => dispatch => {
	const API_KEY = 'AIzaSyC7pPwgCWwV2xIBaJ6alubzQAny_P10i9M';
	const { url, id } = data;
	dispatch({
		type: SHARE_VIDEO_REQUEST
	});
	axiosOrg
		.get(
			`https://www.googleapis.com/youtube/v3/videos?id=${id}&key=${API_KEY}&part=snippet,contentDetails,statistics,status`
		)
		.then(res => {
			return res.data;
		})
		.then(res => {
			const videoInfo = res.items[0].snippet;
			const { title, description } = videoInfo;
			const post = {
				url,
				videoInfo: {
					title,
					description
				}
			};
			return axios.post('/posts', post);
		})
		.then(res => {
			dispatch({
				type: SHARE_VIDEO_SUCCESS,
				payload: res.data
			});
		})
		.catch(err => {
			dispatch({
				type: SHARE_VIDEO_FAILED,
				payload: err.response.data
			});
		});
};
