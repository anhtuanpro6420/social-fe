import axios from '../../axios';
const AUTH_TOKEN = 'AUTH_TOKEN';
const CURRENT_USER = 'CURRENT_USER';

class StorageService {
	setAuth(token, email) {
		localStorage.setItem(AUTH_TOKEN, token);
		localStorage.setItem(CURRENT_USER, email);
	}

	removeAuth() {
		localStorage.removeItem(AUTH_TOKEN);
		localStorage.removeItem(CURRENT_USER);
	}

	getAuthToken() {
		return localStorage.getItem(AUTH_TOKEN);
	}

	getCurrentUser() {
		return localStorage.getItem(CURRENT_USER);
	}

	setAuthToken = () => {
		if (this.getAuthToken()) {
			axios.defaults.headers.common[
				'Authorization'
			] = this.getAuthToken();
		} else {
			delete axios.defaults.headers.common['Authorization'];
		}
	};
}

const storageService = new StorageService();

export default storageService;
