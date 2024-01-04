import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  note: ''
}

const noteSlice = createSlice({
  name: 'note',
  initialState,
  reducers: {
    addNote: (state, action) => {
      state.note = action.payload
    }
  }
})

export const { addNote } = noteSlice.actions

export default noteSlice.reducer
