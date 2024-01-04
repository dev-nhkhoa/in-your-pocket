import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import { useSelector, useDispatch } from 'react-redux'
import { addNote, toggleOffNote } from '~/redux/features/note/noteSlice'
import React from 'react'

export default function NoteDialog() {
  const [note, setNote] = React.useState('')

  const handleNoteChange = (event) => {
    setNote(event.target.value)
  }

  const isOpen = useSelector((state) => state.note.toggle)
  const dispatch = useDispatch()

  return (
    <Dialog open={isOpen} onClose={() => dispatch(toggleOffNote())}>
      <DialogTitle>Nhập ghi chú chi tiêu:</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin='dense'
          id='note'
          label='Ghi chú:'
          type='text'
          fullWidth
          variant='standard'
          onChange={handleNoteChange}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={() => dispatch(toggleOffNote())}>Thoát</Button>
        <Button
          onClick={() => {
            dispatch(addNote(note))
            dispatch(toggleOffNote())
          }}
        >
          Lưu
        </Button>
      </DialogActions>
    </Dialog>
  )
}
