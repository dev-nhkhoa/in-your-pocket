import styled from '@emotion/styled'
import { FormControl, InputBase } from '@mui/material'

const BootstrapInput = styled(InputBase)(() => ({
  '& .MuiInputBase-input': {
    borderRadius: 25,
    position: 'relative',
    backgroundColor: '#ffffff',
    border: '1px solid #000',
    fontSize: 16,
    width: '370px',
    height: '40px',
    padding: '10px 12px'
  }
}))

const InputField = ({ id }) => {
  return (
    <FormControl variant='standard'>
      <BootstrapInput defaultValue='' id={id} />
    </FormControl>
  )
}

export default InputField
