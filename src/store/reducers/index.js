import { combineReducers } from 'redux';
import loginReducer from './loginReducer';
import errorsReducer from './errorsReducer';
import registerReducer from './registerReducer';

const rootReducer = combineReducers({
	login: loginReducer,
	errors: errorsReducer,
	register: registerReducer
});

export default rootReducer;
