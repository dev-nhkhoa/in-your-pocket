import { Box, Typography } from '@mui/material'

const Wallet = ({ name, balance }) => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'space-between', px: '10px' }}>
      <Typography sx={{ fontSize: '16px', fontWeight: 'light' }}>
        {name}:
      </Typography>
      <Typography sx={{ fontSize: '18px', fontWeight: 'bold' }}>
        {`${parseFloat(balance).toLocaleString()} đ`}
      </Typography>
    </Box>
  )
}

export default Wallet
