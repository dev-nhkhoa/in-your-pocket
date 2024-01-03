import { Box } from '@mui/material'
import { useSelector } from 'react-redux'

const ResultScreen = () => {
  const moneyInput = useSelector((state) => state.moneyInput.money)
  return (
    <Box
      sx={{
        width: '210px',
        height: '25px',
        backgroundColor: 'inYourPocket.button.bgColor',
        borderRadius: '16px',
        color: 'inYourPocket.button.textColor',
        display: 'flex',
        justifyContent: 'right',
        px: '10px'
      }}
    >
      {parseFloat(moneyInput).toLocaleString()} đ
    </Box>
  )
}

export default ResultScreen
