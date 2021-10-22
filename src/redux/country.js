import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  country: {},
}

export const countrySlice = createSlice({
  name: 'countryData',
  initialState,
  reducers: {
    setCountryData: (state, action) => {
      state.country = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { setCountryData} = countrySlice.actions

export default countrySlice.reducer