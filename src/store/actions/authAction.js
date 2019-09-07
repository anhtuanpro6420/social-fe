import axios from '../../axios';
import * as Types from './types';

export const registerUser = (userData, history) => dispatch => {
  axios.post('/api/users', userData)
     .then(res => {
       console.log(res);
       history.push('/login')}
      )
     .catch(err => {
       dispatch({
         type: Types.GET_ERRORS,
         payload: err.response.data
       })
     })
}

export const startLoading = () => {
  return {
    type: Types.START_LOADING
  }
}

export const endLoading = () => {
  return {
    type: Types.END_LOADING
  }
}

export const test = () => dispatch => {
  dispatch(startLoading());
  console.log(322);
  axios.get('/users/test')
     .then(res => {
        console.log(res);
        setTimeout(() => {
          dispatch(endLoading());
        }, 2000);
       }
      )
     .catch(err => {
       dispatch({
         type: Types.GET_ERRORS,
         payload: err.response.data
       })
     })
}