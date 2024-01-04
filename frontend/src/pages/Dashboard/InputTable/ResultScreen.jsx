import { Box } from '@mui/material'
import { useSelector } from 'react-redux'
import { SETTINGS } from '~/lib/settings'

const ResultScreen = () => {
  if (SETTINGS.devMode) {
    // eslint-disable-next-line no-console
    console.log('Render ResultScreen')
  }
  const moneyInput = useSelector((state) => state.moneyInput.money)
  return (
    <Box
      sx={{
        width: '210px',
        height: '30px',
        backgroundColor: 'inYourPocket.button.bgColor',
        borderRadius: '16px',
        color: 'inYourPocket.button.textColor',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'right',
        px: '10px'
      }}
    >
      {parseFloat(moneyInput).toLocaleString()} đ
    </Box>
  )
}

export default ResultScreen
