import {
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAILURE,
  FETCH_DATA_STARTED,
  CLEAR_FETCH
} from './types';
import axios from 'axios';

export const fetchData = (userId) => {
  console.log('*** fetchData userId ===> ', userId);
  return dispatch => {
    dispatch(fetchDataStarted());
    axios
      .get(`https://reqres.in/api/users/`, {
        params: {
          id: userId
        }
      })
      .then(res => {
        console.log('*** fetchData res ===> ', res);
        dispatch(fetchDataSuccess(res.data));
      })
      .catch(err => {
        dispatch(fetchDataFailure(err.message));
      });
  };
};

export const clearFetch = () => (
  {
    type: CLEAR_FETCH,
    payload: ''
  }
);

const fetchDataStarted = () => ({
  type: FETCH_DATA_STARTED
});

const fetchDataSuccess = data => ({
  type: FETCH_DATA_SUCCESS,
  payload: {
    ...data
  }
});

const fetchDataFailure = error => ({
  type: FETCH_DATA_FAILURE,
  payload: {
    error
  }
});