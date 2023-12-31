import { Box, Typography } from '@mui/material'
import ChiTieuCard from './ChiTieuCard/ChiTieuCard'

const ChiTieuLog = () => {
  return (
    <Box
      sx={{
        width: '300px',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#D9D9D9',
        borderRadius: '16px',
        p: '10px',
        gap: '10px',
        maxHeight: '380px',
        overflowY: 'auto',
        overflowX: 'hidden'
      }}
    >
      <Typography sx={{ textAlign: 'start' }}>CHI TIÊU:</Typography>
      <ChiTieuCard
        date='31/12/2023'
        time='12:12'
        money={300000}
        note='Nhận lương tháng 12'
      />
      <ChiTieuCard />
      <ChiTieuCard />
      <ChiTieuCard />
      <ChiTieuCard />
    </Box>
  )
}

export default ChiTieuLog
