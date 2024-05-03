import { configureStore } from "@reduxjs/toolkit";

import { filtersReducer } from "./filtersSlice";
import { contactsReduser } from "./contactsSlice";

export const store = configureStore({
  reducer: {
    contacts: contactsReduser,
    filters: filtersReducer,
  },
});
