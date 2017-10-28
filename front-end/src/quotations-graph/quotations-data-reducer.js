import mapActionToReducer from 'redux-action-reducer-mapper';

import {
  FETCH_QUOTATIONS_REQUEST,
  FETCH_QUOTATIONS_RESPONSE,
  FETCH_QUOTATIONS_ERROR,
} from './quotations-data-actions';

const STATUS_IDLE = 'IDLE';
const STATUS_LOADING = 'LOADING';
const STATUS_ERROR = 'ERROR';

const INITIAL_STATE = {
  status: STATUS_IDLE,
  data: {},
};

export default mapActionToReducer({
  default: INITIAL_STATE,

  [FETCH_QUOTATIONS_REQUEST]: (state) => ({
    ...state,
    status: STATUS_LOADING,
  }),

  [FETCH_QUOTATIONS_RESPONSE]: (state, action) => ({
    status: STATUS_IDLE,
    data: action.payload.quotations,
  }),

  [FETCH_QUOTATIONS_ERROR]: (state) => ({
    ...state,
    status: STATUS_ERROR,
  }),
});