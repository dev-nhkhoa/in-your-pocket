import { Box, Typography } from '@mui/material'
import { formatNumber } from '~/lib/utils'

const ChiTieuCard = ({ date, time, money, note, name }) => {
  const operator = money >= 0 ? '+' : ''
  const formatedMoney = `${operator}${formatNumber(money)}`
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        backgroundColor: money >= 0 ? 'green' : 'red',
        borderRadius: '26px',
        justifyContent: 'center',
        p: '10px'
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}
      >
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <Typography>{date}</Typography>
          <Typography>{time}</Typography>
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <Typography
            sx={{ fontSize: '16px', fontWeight: 'light', textAlign: 'right' }}
          >
            {name}
          </Typography>
          <Typography sx={{ fontSize: '23px', fontWeight: 'bold' }}>
            {formatedMoney}
          </Typography>
          <Typography
            sx={{ textAlign: 'right', width: '100%', textWrap: 'wrap' }}
          >
            {note}
          </Typography>
        </Box>
      </Box>
    </Box>
  )
}

export default ChiTieuCard
