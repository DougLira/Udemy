import _ from "lodash";
import * as types from "../types";

export default function(state = {}, action) {
  switch (action.type) {
    case types.FETCH_POSTS:
      return _.mapKeys(action.payload.data, "id");
    case types.FETCH_POST:
      return { ...state, [action.payload.data.id]: action.payload.data };
    case types.DELETE_POST:
      return _.omit(state, [action.payload]);
    default:
      return state;
  }
}
