import { createSlice } from '@reduxjs/toolkit';

const filtersInitialState = '';

const filterSlice = createSlice({
  name: 'filters',
  initialState: filtersInitialState,
 });

export const { filterContacts } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
