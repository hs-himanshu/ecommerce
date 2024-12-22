import authReducer from "./slice/authSlice";
import { configureStore } from '@reduxjs/toolkit'

const store = configureStore({
  reducer: {
    auth: authReducer, // Combine reducers here directly
  },
});

export default store;
