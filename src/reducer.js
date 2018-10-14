import{ ADD_LOCATION, LOAD_WEATHER } from './types.js';

const initState = {
  locations: [],
  currLocation: null,
  weather: null
}

export default function reducer(state = initState, action){
  switch(action.type){
    case ADD_LOCATION:
      return{...state, locations: state.locations + action.payload}
    case LOAD_WEATHER:
      return{...state, weather: action.payload}
    default:
      return state
  }
}
