import { configureStore } from '@reduxjs/toolkit'
import moneyInputReducer from './features/moneyInput/moneyInputSlice'

export const stateStorage = configureStore({
  reducer: { moneyInput: moneyInputReducer }
})
