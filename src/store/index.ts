import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";
import authReducer from "./slices/authSlice";
import uiReducer from "./slices/uiSlice";
import courseReducer from "./slices/courseSlice";
import paymentReducer from "./slices/paymentSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    ui: uiReducer,
    courses: courseReducer,
    payment: paymentReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
