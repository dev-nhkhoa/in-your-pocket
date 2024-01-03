import { Button, Typography } from '@mui/material'
import { useDispatch } from 'react-redux'
import {
  updateMoneyInput,
  resetMoneyInput
} from '~/redux/features/moneyInput/moneyInputSlice'

const TableButton = ({ name, width, height, props }) => {
  const dispatch = useDispatch()
  /* eslint-disable indent */
  const handleClicked = (name) => {
    switch (name) {
      case 'A/C':
        dispatch(resetMoneyInput())
        break
      case '0':
      case '1':
      case '2':
      case '3':
      case '4':
      case '5':
      case '6':
      case '7':
      case '8':
      case '9':
        dispatch(updateMoneyInput(name))
        break
      default:
        break
    }
  }
  return (
    <Button
      sx={{
        width: width,
        height: height,
        backgroundColor: 'inYourPocket.button.bgColor',
        borderRadius: '16px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        ...props
      }}
      onClick={() => handleClicked(name)}
    >
      <Typography
        sx={{ color: 'inYourPocket.button.textColor', fontSize: '20px' }}
      >
        {name}
      </Typography>
    </Button>
  )
}

export default TableButton
