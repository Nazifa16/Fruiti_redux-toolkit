import { configureStore } from "@reduxjs/toolkit";
import cardSlice from "./CardSlice";

export const store = configureStore({
  reducer: {
    card_state: cardSlice,
  },
});
