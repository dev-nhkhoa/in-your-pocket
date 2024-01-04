import { Box } from '@mui/material'
import TableButton from './TableButton'
import { SETTINGS } from '~/lib/settings'
import { useSelector } from 'react-redux'
import WalletSelectDialog from './WalletSelectDialog'

const NoteAndWalletButton = () => {
  const wallet = useSelector((state) => state.chosenWallet.wallet)
  if (SETTINGS.devMode) {
    // eslint-disable-next-line no-console
    console.log(wallet)
    // eslint-disable-next-line no-console
    console.log('Render NoteAndWalletButton')
  }
  return (
    <Box sx={{ display: 'flex', gap: '10px' }}>
      <TableButton name='Ví' width={'60px'} height={'60px'} />
      <WalletSelectDialog />
      <TableButton name='Note' width={'60px'} height={'60px'} />
    </Box>
  )
}

export default NoteAndWalletButton
