import { createStore } from 'redux';
import reducer from './reducer.js';

export const store = createStore(reducer)

const dispatchWithLog = (store) => {
  const rawDispatch = store.dispatch;
  return (action) => {
    console.group("DISPATCH");
    console.log('%c state before dispatch', 'color: red', store.getState())
    const returnValue = rawDispatch(action);
    console.log('%c state after dispatch', 'color: red', store.getState())
    console.groupEnd();
    return returnValue;
  }
}

store.dispatch = dispatchWithLog(store)

export default store
