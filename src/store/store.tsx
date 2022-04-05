
import { configureStore, Store } from '@reduxjs/toolkit'
import { combineReducers } from "@reduxjs/toolkit";
import layoutSlice from './layout'

const rootReducer = combineReducers({layoutSlice});

export const store: Store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware => {
    return getDefaultMiddleware({
      serializableCheck: false
    })
  }
})

// export type RootState = ReturnType<typeof rootReducer>;
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
