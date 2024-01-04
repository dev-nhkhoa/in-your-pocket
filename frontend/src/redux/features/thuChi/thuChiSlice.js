import { createSlice } from '@reduxjs/toolkit'

export const THU_CHI = {
  THU: 'Thu',
  CHI: 'Chi'
}

const initialState = {
  toggle: THU_CHI.THU
}

const thuChiSlice = createSlice({
  name: 'thuChi',
  initialState,
  reducers: {
    toggleChi: (state) => {
      state.toggle = THU_CHI.CHI
    },
    toggleThu: (state) => {
      state.toggle = THU_CHI.THU
    }
  }
})

export const { toggleChi, toggleThu } = thuChiSlice.actions

export default thuChiSlice.reducer
