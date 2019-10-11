import { combineReducers } from 'redux';
import authReducer from './authReducer';
import errorsReducer from './errorsReducer';
import registerReducer from './registerReducer';
import shareVideoReducer from './shareVideoReducer';
import newsfeedReducer from './newsfeedReducer';

const rootReducer = combineReducers({
	auth: authReducer,
	errors: errorsReducer,
	register: registerReducer,
	shareVideo: shareVideoReducer,
	newsfeed: newsfeedReducer
});

export default rootReducer;
