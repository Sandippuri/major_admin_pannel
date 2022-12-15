import { configureStore } from '@reduxjs/toolkit'
import { collegeApi } from '../RTK/slices/college'
import { studentApi } from '../RTK/slices/student'

const middleware = [collegeApi.middleware,studentApi.middleware]
export const store = configureStore({
  reducer: {
    // Add the generated reducer as a specific top-level slice
    [collegeApi.reducerPath]: collegeApi.reducer,
    [studentApi.reducerPath]: studentApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(middleware),
})


