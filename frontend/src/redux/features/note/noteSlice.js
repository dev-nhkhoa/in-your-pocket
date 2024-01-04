import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  toggle: false,
  note: ''
}

const noteSlice = createSlice({
  name: 'note',
  initialState,
  reducers: {
    toggleOnNote: (state) => {
      state.toggle = true
    },
    toggleOffNote: (state) => {
      state.toggle = false
    },
    addNote: (state, action) => {
      state.note = action.payload
    }
  }
})

export const { addNote, toggleOnNote, toggleOffNote } = noteSlice.actions

export default noteSlice.reducer
