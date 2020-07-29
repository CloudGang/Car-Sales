import { ADD_FEATURE, DELETE_FEATURE } from '../actions/actions';

function additionalPrice(state = 0, action) {
  switch (action.type) {
    case ADD_FEATURE:
      return state + action.payload.price;
    case DELETE_FEATURE:
      return state - action.payload.price;
    default:
      return state;
  }
}

export default additionalPrice;