import axios from '../../axios';
const AUTH_TOKEN = 'AUTH_TOKEN';
const CURRENT_USER = 'CURRENT_USER';

export const setAuth = (token, email) => {
	localStorage.setItem(AUTH_TOKEN, token);
	localStorage.setItem(CURRENT_USER, email);
};

export const removeAuth = () => {
	localStorage.removeItem(AUTH_TOKEN);
	localStorage.removeItem(CURRENT_USER);
};

export const getAuthToken = () => {
	return localStorage.getItem(AUTH_TOKEN);
};

export const getCurrentUser = () => {
	return localStorage.getItem(CURRENT_USER);
};

export const setAuthToken = () => {
	if (getAuthToken()) {
		axios.defaults.headers.common['Authorization'] = getAuthToken();
	} else {
		delete axios.defaults.headers.common['Authorization'];
	}
};
