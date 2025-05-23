import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "src/services/store";

interface AppState {
  isLoading: boolean;
  userInfo: {
    id: string | null;
    username: string | null;
    role: string | null;
  };
}

const initialState: AppState = {
  isLoading: false,
  userInfo: {
    id: null,
    username: null,
    role: null,
  },
};

export const AppSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    login: (state, { payload }) => {},
    logout: (state, { payload }) => {},
    setIsLoading: (state, { payload }) => {
      state.isLoading = payload;
    },
    getUserInfo: (state, { payload }) => {},
    setUserInfo: (state, { payload }) => {
      state.userInfo = payload;
    },
  },
});
const AppReducer = AppSlice.reducer;
export default AppReducer;
export const AppActions = AppSlice.actions;

export const AppSelectors = {
  isLoading: (state: RootState) => state.app.isLoading,
  userInfo: (state: RootState) => state.app.userInfo,
};
