import { configureStore } from '@reduxjs/toolkit'
import countryReducer from "./country"
import modeReducer from "./darkmode"

export const store = configureStore({
  reducer: {
    country : countryReducer,
    modeSwitch : modeReducer
  },
})