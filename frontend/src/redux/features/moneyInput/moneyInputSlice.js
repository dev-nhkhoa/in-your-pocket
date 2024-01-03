import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  money: '0'
}

const moneyInputSlice = createSlice({
  name: 'moneyInput',
  initialState,
  reducers: {
    updateMoneyInput: (state, action) => {
      let prevMoney = state.money
      let userInput = action.payload
      if (prevMoney.length >= 10) {
        state.money = prevMoney
        return
      }
      if (prevMoney === '0') {
        if (userInput === '0') {
          state.money = prevMoney
          return
        }

        state.money = userInput
        return
      }
      state.money = `${prevMoney}${userInput}`
      return
    },
    resetMoneyInput: (state) => {
      state.money = initialState.money
    }
  }
})

export const { updateMoneyInput, resetMoneyInput } = moneyInputSlice.actions

export default moneyInputSlice.reducer
