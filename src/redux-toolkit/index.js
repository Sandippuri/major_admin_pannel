import { configureStore } from '@reduxjs/toolkit'
import { collegeApi } from './apiSlices/college'
import { studentApi } from './apiSlices/student'
import { departmentApi } from './apiSlices/department'
import { teacherApi } from './apiSlices/teacher'
import { noticeApi } from './apiSlices/notice'

const middleware = [collegeApi.middleware,studentApi.middleware, departmentApi.middleware, teacherApi.middleware, noticeApi.middleware]
export const store = configureStore({
  reducer: {
    // Add the generated reducer as a specific top-level slice
    [collegeApi.reducerPath]: collegeApi.reducer,
    [studentApi.reducerPath]: studentApi.reducer,
    [departmentApi.reducerPath]: departmentApi.reducer,
    [teacherApi.reducerPath]: teacherApi.reducer,
    [noticeApi.reducerPath]: noticeApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(middleware),
})


