import { Box, Typography } from '@mui/material'
import Wallet from '../Wallet'
import { calcTotal, getWallets } from '~/lib/wallet_data'
import { formatNumber } from '~/lib/utils'

const WalletScreen = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        width: '300px',
        height: 'fit-content',
        flexDirection: 'column',
        backgroundColor: '#D9D9D9',
        color: '#000',
        borderRadius: '16px',
        p: '10px'
      }}
    >
      <Box
        sx={{ display: 'flex', justifyContent: 'space-between', px: '10px' }}
      >
        <Typography sx={{ fontSize: '16px' }}>Số Dư:</Typography>
        <Typography sx={{ fontSize: '18px', fontWeight: 'bold' }}>
          {formatNumber(calcTotal())}
        </Typography>
      </Box>

      {getWallets().map((wallet, index) => {
        return (
          <Wallet
            key={index}
            name={wallet.name}
            balance={wallet.balance(wallet.name)}
          />
        )
      })}
    </Box>
  )
}

export default WalletScreen
