import axios from 'axios';

const instance = axios.create({
	baseURL:
		process.env.NODE_ENV !== 'production'
			? 'http://localhost:4000/api'
			: process.env.REACT_APP_BASE_URI
});

export default instance;
