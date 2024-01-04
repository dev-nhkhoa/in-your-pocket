import { configureStore } from '@reduxjs/toolkit'
import moneyInputReducer from './features/moneyInput/moneyInputSlice'
import thuChiReducer from './features/thuChi/thuChiSlice'
import chosenWalletReducer from './features/chosenWallet/chosenWalletSlice'
import noteReducer from './features/note/noteSlice'

export const stateStorage = configureStore({
  reducer: {
    moneyInput: moneyInputReducer,
    thuChi: thuChiReducer,
    chosenWallet: chosenWalletReducer,
    note: noteReducer
  }
})
