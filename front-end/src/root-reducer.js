import { combineReducers } from 'redux';

import quotationsData from './quotations-graph/quotations-data-reducer';
import graph from './quotations-graph/graph-reducer';

export default combineReducers({
  quotationsData,
  graph,
});
