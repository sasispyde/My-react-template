import { configureStore } from '@reduxjs/toolkit';
import Reducer from '../reducer/counter_reducer';

/*  
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';

const middlewares = getDefaultMiddleware();
console.log(middlewares);

const logger = store => next => action => {
  console.group(action.type)
  console.info('dispatching', action)
  console.log('Before', store.getState())
  let result = next(action)
  console.log('After', store.getState())
  console.groupEnd()
  return result;
}

  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
*/

export default configureStore({
  reducer: Reducer
})