import { configureStore } from "@reduxjs/toolkit";
import { collegeApi } from "./apiSlices/college";
import { studentApi } from "./apiSlices/student";
import { departmentApi } from "./apiSlices/department";
import { teacherApi } from "./apiSlices/teacher";
import { noticeApi } from "./apiSlices/notice";
import { resultApi } from "./apiSlices/result";
import { authApi } from "./apiSlices/auth";
import { batchApi } from "./apiSlices/batch";
import { sectionApi } from "./apiSlices/section";
import { programmeApi } from "./apiSlices/programme";
import { collegeDepartmentApi } from "./apiSlices/collegeDepartment";
import { collegeProgrammeApi } from "./apiSlices/collegeProgramme";
import { subjectApi } from "./apiSlices/subject";
import userSlice from "./slices/userSlice";

const middleware = [
  collegeApi.middleware,
  studentApi.middleware,
  departmentApi.middleware,
  teacherApi.middleware,
  noticeApi.middleware,
  resultApi.middleware,
  authApi.middleware,
  batchApi.middleware,
  sectionApi.middleware,
  programmeApi.middleware,
  collegeDepartmentApi.middleware,
  collegeProgrammeApi.middleware,
  subjectApi.middleware,
];
const store = configureStore({
  reducer: {
    // Add the generated reducer as a specific top-level slice
    [collegeApi.reducerPath]: collegeApi.reducer,
    [studentApi.reducerPath]: studentApi.reducer,
    [departmentApi.reducerPath]: departmentApi.reducer,
    [teacherApi.reducerPath]: teacherApi.reducer,
    [noticeApi.reducerPath]: noticeApi.reducer,
    [resultApi.reducerPath]: resultApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
    [batchApi.reducerPath]: batchApi.reducer,
    [sectionApi.reducerPath]: sectionApi.reducer,
    [programmeApi.reducerPath]: programmeApi.reducer,
    [collegeDepartmentApi.reducerPath]: collegeDepartmentApi.reducer,
    [collegeProgrammeApi.reducerPath]: collegeProgrammeApi.reducer,
    [subjectApi.reducerPath]: subjectApi.reducer,
    user: userSlice.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(middleware),
});

export default store;
