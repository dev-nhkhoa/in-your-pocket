import { Button, Typography } from '@mui/material'
import { useDispatch } from 'react-redux'
import { SETTINGS } from '~/lib/settings'
import {
  updateMoneyInput,
  resetMoneyInput
} from '~/redux/features/moneyInput/moneyInputSlice'
import { toggleChi, toggleThu } from '~/redux/features/thuChi/thuChiSlice'
import { toggleOnDialog } from '~/redux/features/chosenWallet/chosenWalletSlice'

const TableButton = ({ name, width, height, props }) => {
  if (SETTINGS.devMode) {
    // eslint-disable-next-line no-console
    console.log('Render Table Button')
  }
  const dispatch = useDispatch()
  /* eslint-disable indent */
  const handleClicked = (name) => {
    switch (name) {
      case 'Ví':
        dispatch(toggleOnDialog())
        break
      case 'Thu':
        dispatch(toggleThu())
        break
      case 'Chi':
        dispatch(toggleChi())
        break
      case 'A/C':
        // return default settings
        dispatch(resetMoneyInput())
        dispatch(toggleThu())
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
        borderRadius: '25px',
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
