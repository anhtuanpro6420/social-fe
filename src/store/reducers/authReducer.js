import * as Types from '../actions/types';

const initialState = {
    isLoading: false
};
const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
      case Types.START_LOADING:
        return {
          ...state,
          isLoading: true
        }
      case Types.END_LOADING:
        return {
          ...state,
          isLoading: false
        }
      default:
        return state;
    }
};

export default reducer;