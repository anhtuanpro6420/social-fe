import { combineReducers } from 'redux';
import loginReducer from './loginReducer';
import errorsReducer from './errorsReducer';
import registerReducer from './registerReducer';
import shareVideoReducer from './shareVideoReducer';
import newsfeedReducer from './newsfeedReducer';

const rootReducer = combineReducers({
	login: loginReducer,
	errors: errorsReducer,
	register: registerReducer,
	shareVideo: shareVideoReducer,
	newsfeed: newsfeedReducer
});

export default rootReducer;
