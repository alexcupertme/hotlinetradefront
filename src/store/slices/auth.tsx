// ** Redux Imports
import { createSlice, Slice, PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "../../types/types";

// ** ThemeConfig Import
import themeConfig from "../../configs/themeConfig";
import { loginThunk, registerThunk, requestVerifyThunk, verifyThunk } from "../thunks/authThunk";

const initialState: IUser = {
  token: "",
  verified: false,
  isLoading: false,
  error: "",
};

export const authSlice: Slice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: {
    [loginThunk.fulfilled.type]: (state, action) => {
      state.token = action.payload.data.token;
      state.verified = false
      state.isLoading = false;
      state.error = "";
    },
    [loginThunk.pending.type]: (state, action) => {
      state.isLoading = true;
    },
    [loginThunk.rejected.type]: (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    },
    // --------------------
    [registerThunk.fulfilled.type]: (state, action) => {
      state.verified = false
      state.isLoading = false;
      state.error = "";
    },
    [registerThunk.pending.type]: (state, action) => {
      state.isLoading = true;
    },
    [registerThunk.rejected.type]: (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    },
    // --------------------
    [verifyThunk.fulfilled.type]: (state, action) => {
      state.verified = action.payload.success;
      state.isLoading = false;
      state.error = "";
    },
    [verifyThunk.pending.type]: (state, action) => {
      state.isLoading = true;
    },
    [verifyThunk.rejected.type]: (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    },
    // --------------------
    [requestVerifyThunk.fulfilled.type]: (state, action) => {
      state.verified = action.payload.success;
      state.isLoading = false;
      state.error = "";
    },
    [requestVerifyThunk.pending.type]: (state, action) => {
      state.isLoading = true;
    },
    [requestVerifyThunk.rejected.type]: (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    },
  },
});

export const {} = authSlice.actions;

export default authSlice.reducer;
