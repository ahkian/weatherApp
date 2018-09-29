import{ ADD_LOCATION } from './types.js';

const initState = {
  locations: []
}

export default function reducer(state = initState, action){
  switch(action.type){
    case ADD_LOCATION:
      return{...state, locations: state.locations + action.payload}
    default:
      return state
  }
}
