import { createSlice } from "@reduxjs/toolkit";
import { INITIAL_STATE } from "./contactsSlice";

const filtersSlice = createSlice({
  name: "filters",
  initialState: INITIAL_STATE.filters,
  reducers: {
    changeFilter(state, action) {
      state.name = action.payload;
    },
  },
});

export const { changeFilter } = filtersSlice.actions;

export const selectNameFilter = (state) => state.filters.name;

export const filtersReducer = filtersSlice.reducer;
