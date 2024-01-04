import { configureStore } from '@reduxjs/toolkit'
import moneyInputReducer from './features/moneyInput/moneyInputSlice'
import thuChiReducer from './features/thuChi/thuChiSlice'

export const stateStorage = configureStore({
  reducer: { moneyInput: moneyInputReducer, thuChi: thuChiReducer }
})
