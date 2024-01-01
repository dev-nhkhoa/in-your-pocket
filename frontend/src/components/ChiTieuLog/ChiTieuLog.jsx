import { Box, Typography } from '@mui/material'
import ChiTieuCard from './ChiTieuCard/ChiTieuCard'
import {
  getAllTransactions,
  getWalletViaIdTransaction
} from '~/lib/wallet_data'

const ChiTieuLog = () => {
  const allTransactions = getAllTransactions()

  return (
    <Box
      sx={{
        width: '300px',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'inYourPocket.section.bgColor',
        borderRadius: '16px',
        p: '10px',
        gap: '10px',
        maxHeight: '380px',
        overflowY: 'auto',
        overflowX: 'hidden'
      }}
    >
      <Typography sx={{ textAlign: 'start' }}>CHI TIÊU:</Typography>
      {allTransactions.length === 0 && <Typography>Chưa có dữ liệu</Typography>}
      {allTransactions.map((transaction, index) => {
        return (
          <ChiTieuCard
            key={index}
            date={transaction.date}
            time={transaction.time}
            money={transaction.balanceChange}
            note={transaction.note}
            name={getWalletViaIdTransaction(transaction._id)}
          />
        )
      })}
    </Box>
  )
}

export default ChiTieuLog
