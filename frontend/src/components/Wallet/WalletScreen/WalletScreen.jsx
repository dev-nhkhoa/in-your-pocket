import { Box, Typography } from '@mui/material'
import Wallet from '../Wallet'
import { walletList, calcAllBalance } from '~/lib/wallet_list'
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
          {formatNumber(calcAllBalance())}
        </Typography>
      </Box>

      {walletList.map((wallet, index) => {
        return (
          <Wallet key={index} name={wallet.name} balance={wallet.balance} />
        )
      })}
    </Box>
  )
}

export default WalletScreen
