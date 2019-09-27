import { combineReducers } from 'redux';
import authReducer from './authReducer';
import errorsReducer from './errorsReducer';
import registerReducer from './registerReducer';

const rootReducer = combineReducers({
	auth: authReducer,
	errors: errorsReducer,
	register: registerReducer
});

export default rootReducer;
