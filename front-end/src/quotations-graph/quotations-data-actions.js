import { getResourceUrl } from '../urlHelper';
export const FETCH_QUOTATIONS_REQUEST = 'FETCH_QUOTATIONS_REQUEST';
export const FETCH_QUOTATIONS_RESPONSE = 'FETCH_QUOTATIONS_RESPONSE';
export const FETCH_QUOTATIONS_ERROR = 'FETCH_QUOTATIONS_ERROR';

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response.json();
  } else {
    var error = new Error(response.statusText)
    error.response = response;
    throw error;
  }
}

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

    const request = fetch(getResourceUrl('quotations'), {
      method: 'GET',
    });

    request
      .then(checkStatus)
      .then((data) => {
        dispatch(fireFetchQuotationsResponse(data[0].price));
      })
      .catch(function(error) {
        console.log('request failed', error);
        dispatch(fireFetchQuotationsError());
      });
  }
