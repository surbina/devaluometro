export const FETCH_QUOTATIONS_REQUEST = 'FETCH_QUOTATIONS_REQUEST';
export const FETCH_QUOTATIONS_RESPONSE = 'FETCH_QUOTATIONS_RESPONSE';
export const FETCH_QUOTATIONS_ERROR = 'FETCH_QUOTATIONS_ERROR';

const fireFetchQuotationsRequest = () => ({
  type: FETCH_QUOTATIONS_REQUEST,
});

const fireFetchQuotationsResponse = (quotations) => ({
  type: FETCH_QUOTATIONS_RESPONSE,
  payload: {
    quotations,
  },
});

const fireFetchQuotationsError = () => ({
  type: FETCH_QUOTATIONS_ERROR,
});

export const fireFetchQuotations = () =>
  (dispatch) => {
    dispatch(fireFetchQuotationsRequest());

    // call fetch quotations
    // if success
    //    fire quotations response
    // else
    //    fire quotations error
  }
