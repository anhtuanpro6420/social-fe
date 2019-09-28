import axios from 'axios';
import storageService from './core/services/storageService';

const instance = axios.create({
	baseURL: 'http://localhost:4000/api'
});
console.log(storageService.getAuthToken());
instance.defaults.headers.common[
	'Authorization'
] = storageService.getAuthToken();

export default instance;
