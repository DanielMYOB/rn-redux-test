import { configureStore } from "@reduxjs/toolkit";
import messageReducer from "./message";
import usersReducer from "./users";
import { composeWithDevTools } from "@redux-devtools/extension";

const composedEnhancers = composeWithDevTools();

export const store = configureStore({
  reducer: {
    message: messageReducer,
    users: usersReducer,
  },
  devTools: composedEnhancers,
});
