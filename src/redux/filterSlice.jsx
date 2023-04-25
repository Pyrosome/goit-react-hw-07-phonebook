import { createSlice } from '@reduxjs/toolkit'

const filterSlice = createSlice({
  name: 'filter',
    initialState:
        { value : '' },
    reducers: {
        filterContacts: (state, action) => {
            state.value = action.payload
        }
    },
})

export const { filterContacts } = filterSlice.actions;
export const FilterReducer = filterSlice.reducer

// Selectors
export const getFilter = state => state.filter.value;