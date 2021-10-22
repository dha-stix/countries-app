import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  darkmode: false,
}

export const modeSlice = createSlice({
  name: 'modeSwitch',
  initialState,
  reducers: {
    changeMode: (state) => {
      state.darkmode = !state.darkmode
    },
  },
})

// Action creators are generated for each case reducer function
export const { changeMode} = modeSlice.actions

export default modeSlice.reducer