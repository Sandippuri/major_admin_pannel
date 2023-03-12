import { createSlice } from "@reduxjs/toolkit";
import { getAuthToken, clearUserData, setAuthToken } from "../../utils/auth";

const initialState = {
  isUserAuthenticated: !!getAuthToken(),
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginUser: (state, action) => {
      const { token } = action.payload;
      state.isUserAuthenticated = true;
      setAuthToken(token);
    },

    logoutUser: (state) => {
      state.isUserAuthenticated = false;
      clearUserData();
    },
  },
});

export const { loginUser, setUser, logoutUser } = userSlice.actions;
export default userSlice;
