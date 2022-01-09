import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {RootState} from './index';
import {AuthSliceState} from '../types/slices/auth';
import * as SecureStore from 'expo-secure-store';

const ACCESS_TOKEN_KEY = 'ACCESS_TOKEN';
const REFRESH_TOKEN_KEY = 'REFRESH_TOKEN';

export const initialState: AuthSliceState = {
  isLogged: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    extraReducers: builder => {
      builder.addCase(setAccessToken.fulfilled, state => {
        state.isLogged = true;
      });
      builder.addCase(logout.fulfilled, state => {
        state.isLogged = false;
      });
    },
  },
});

export const logout = createAsyncThunk('auth/logout', async () => {
  await SecureStore.deleteItemAsync(ACCESS_TOKEN_KEY);
  await SecureStore.deleteItemAsync(REFRESH_TOKEN_KEY);
});

export const setAccessToken = createAsyncThunk(
  'auth/setAccessToken',
  async (accessToken: string) => {
    await SecureStore.setItemAsync(accessToken, ACCESS_TOKEN_KEY);
    return accessToken;
  },
);

export const getAccessToken = async () => {
  return await SecureStore.getItemAsync(ACCESS_TOKEN_KEY);
};

export const setRefreshToken = createAsyncThunk(
  'auth/setRefreshToken',
  async (refreshToken: string) => {
    await SecureStore.setItemAsync(refreshToken, REFRESH_TOKEN_KEY);
    return refreshToken;
  },
);

export const getRefreshToken = async () => {
  return await SecureStore.getItemAsync(REFRESH_TOKEN_KEY);
};

export const authSelector = (state: RootState) => state.auth;
export default authSlice.reducer;
