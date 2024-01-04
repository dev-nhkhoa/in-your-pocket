import { createSlice } from '@reduxjs/toolkit'
import { getWallets, getWallet } from '~/lib/wallet_data'

const initialState = {
  toggle: false,
  wallet: getWallets()[0].name
}

const chosenWalletSlice = createSlice({
  name: 'chosenWallet',
  initialState,
  reducers: {
    toggleOnDialog: (state) => {
      state.toggle = true
    },
    toggleOffDialog: (state) => {
      state.toggle = false
    },
    choseWallet: (state, action) => {
      const wallet = getWallet(action.payload)
      if (wallet !== undefined) {
        state.wallet = wallet.name
      }
    }
  }
})

export const { choseWallet, toggleOffDialog, toggleOnDialog } =
  chosenWalletSlice.actions

export default chosenWalletSlice.reducer
