import * as types from '../types'

export default function(state = [], action) {
  switch(action.type){
    case types.FETCH_WEATHER:
      // return state.concat([action.payload.data]);
      return [action.payload.data, ...state];
  }
  return state;
}