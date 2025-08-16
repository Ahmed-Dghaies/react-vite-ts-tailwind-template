import type { Action, Middleware, ThunkAction } from "@reduxjs/toolkit";
import { configureStore, isRejectedWithValue } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";

// --- Root reducer ---
const rootReducer = (state = {}, action: Action) => {
  switch (action.type) {
    default:
      return state;
  }
};

// --- RootState type ---
export type RootState = ReturnType<typeof rootReducer>;

// --- Middleware to log RTK Query errors ---
const rtkQueryErrorLogger: Middleware = () => (next) => (action) => {
  if (isRejectedWithValue(action)) {
    const errMsg =
      (action.payload as { data?: { message?: string } })?.data?.message ||
      "Request failed";
    console.error(errMsg, action.payload);
  }
  return next(action);
};

// --- Store factory ---
export const makeStore = (preloadedState?: Partial<RootState>) => {
  const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(rtkQueryErrorLogger),
    preloadedState,
  });

  setupListeners(store.dispatch);
  return store;
};

// --- Store instance ---
export const store = makeStore();

// --- Types ---
export type AppStore = typeof store;
export type AppDispatch = AppStore["dispatch"];
export type AppThunk<ThunkReturnType = void> = ThunkAction<
  ThunkReturnType,
  RootState,
  unknown,
  Action
>;
