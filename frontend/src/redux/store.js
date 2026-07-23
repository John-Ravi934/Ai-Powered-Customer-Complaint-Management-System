import { configureStore } from "@reduxjs/toolkit";

import complaintReducer from "./slices/complaintSlice";
import chatReducer from "./slices/chatSlice";

export const store = configureStore({
  reducer: {
    complaint: complaintReducer,
    chat: chatReducer,
  },
});