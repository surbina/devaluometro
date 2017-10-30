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
  quotationsList: [],
  data: {},
  maxQuotationValue: 0,
};

export default mapActionToReducer({
  default: INITIAL_STATE,

  [FETCH_QUOTATIONS_REQUEST]: (state) => ({
    ...state,
    status: STATUS_LOADING,
  }),

  [FETCH_QUOTATIONS_RESPONSE]: (state, action) => {
    const quotationsList = [];
    const data = {};
    let maxQuotationValue = 0;

    action.payload.quotations.forEach((quotation) => {
      quotationsList.push(quotation.date);
      data[quotation.date] = quotation;
      maxQuotationValue = Math.max(maxQuotationValue, quotation.value);
    });

    return {
      status: STATUS_IDLE,
      quotationsList,
      data,
      maxQuotationValue,
    }
  },

  [FETCH_QUOTATIONS_ERROR]: (state) => ({
    ...state,
    status: STATUS_ERROR,
  }),
});
