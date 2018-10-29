import {
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAILURE,
  FETCH_DATA_STARTED,
  CLEAR_FETCH
} from '../actions/types';

const initialState = {
  empDetail: {}
};

export default function EmpDetailReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_DATA_STARTED:
      return {
        ...state,
        loading: true
      };
    case FETCH_DATA_SUCCESS:
      console.log('*** action.payload.data.data ===> ', action.payload.data);
      return {
        ...state,
        loading: false,
        error: null,
        empDetail: action.payload.data
      };
    case FETCH_DATA_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error
      };
    case CLEAR_FETCH:
      return {
        empDetail: initialState.empDetail
      };
    default:
      return state;
  }
}