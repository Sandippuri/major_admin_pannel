import { configureStore } from '@reduxjs/toolkit'
import { collegeApi } from '../RTK/slices/college'
import { studentApi } from '../RTK/slices/student'
import { departmentApi } from '../RTK/slices/department'
import { teacherApi } from '../RTK/slices/teacher'

const middleware = [collegeApi.middleware,studentApi.middleware, departmentApi.middleware, teacherApi.middleware]
export const store = configureStore({
  reducer: {
    // Add the generated reducer as a specific top-level slice
    [collegeApi.reducerPath]: collegeApi.reducer,
    [studentApi.reducerPath]: studentApi.reducer,
    [departmentApi.reducerPath]: departmentApi.reducer,
    [teacherApi.reducerPath]: teacherApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(middleware),
})


