import mapActionToReducer from 'redux-action-reducer-mapper';

import {
  UPDATE_SELECTED_DOMAIN,
  UPDATE_ZOOM_DOMAIN,
} from './graph-actions';

const INITIAL_STATE = {
  brush: null,
};

export default mapActionToReducer({
  default: INITIAL_STATE,
  [UPDATE_SELECTED_DOMAIN]: (state, action) => ({
    ...state,
    selectedDomain: action.payload.selectedDomain,
  }),
  [UPDATE_ZOOM_DOMAIN]: (state, action) => ({
    ...state,
    zoomDomain: action.payload.zoomDomain,
  }),
});
