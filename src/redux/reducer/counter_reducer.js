import { createReducer,createAsyncThunk } from '@reduxjs/toolkit';

import { INCREMENT, DECREMENT, INCREMENT_BY_AMOUNT } from '../actions';

/* For async operations */
/* status : * pending * fulfilled * rejected */
export const fetchPosts = createAsyncThunk('fetch_data',
  async () => {
      return await fetch('https://jsonplaceholder.typicode.com/posts').then(response => response.json())
  }
)

const initialState = { 
  value : 0
};

const counterReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(INCREMENT, (state, action) => {
      state.value++
    })
    .addCase(DECREMENT, (state, action) => {
      state.value--
    })
    .addCase(INCREMENT_BY_AMOUNT, (state, action) => {
      state.value += action.payload.value
    })
    builder.addCase(fetchPosts.pending, (state, action) => {
      return {
        ...state,
        posts : [],
        status : "Loading"
      }
    })
    builder.addCase(fetchPosts.fulfilled, (state, action) => {
      return {
        ...state,
        posts : action.payload,
        status : "Success"
      }
    })
    builder.addCase(fetchPosts.rejected, (state, action) => {
      return {
        ...state,
        posts : [],
        status : "Success"
      }
    })
    .addDefaultCase((state,action) => {
      return state;
    })
})


export default counterReducer;