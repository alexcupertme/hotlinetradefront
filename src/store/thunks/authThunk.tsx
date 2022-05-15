import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { IUser, IUserData } from "../../types/types";

export const loginThunk = createAsyncThunk(
  "login",
  async (authData: IUserData, thunkAPI) => {
    return await axios.post<Promise<IUserData>>(
      `https://api.armapay.ru/api/v1/auth/login`,
      { ...authData }
    );
  }
);

export const registerThunk = createAsyncThunk(
  "register",
  async (authData: IUserData, thunkAPI) => {
    return await axios.post<Promise<IUserData>>(
      `https://api.armapay.ru/api/v1/auth/register`,
      { ...authData }
    );
  }
);

export const verifyThunk = createAsyncThunk(
  "verify",
  async (token: string, thunkAPI) => {
    return await axios.get<Promise<IUserData>>(
      `https://api.armapay.ru/api/v1/auth/verify-mail?token=${token}`
    );
  }
);

export const requestVerifyThunk = createAsyncThunk(
  "requestVerify",
  async (token: string, thunkAPI) => {
    return await axios.get<Promise<IUserData>>(
      `https://api.armapay.ru/api/v1/auth/request-verify-mail`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );
  }
);
