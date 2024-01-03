import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from '@reduxjs/toolkit/query'
import { djangoApi } from './api'
export const store = configureStore({
    reducer: {
        // Add the generated reducer as a specific top-level slice
        [djangoApi.reducerPath]: djangoApi.reducer,
      },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(djangoApi.middleware),
})
setupListeners(store.dispatch)