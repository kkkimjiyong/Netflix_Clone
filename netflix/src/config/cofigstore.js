import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  // devTools: process.env.NODE_ENV !== "production",
  reducer: {},
});

export default store;
