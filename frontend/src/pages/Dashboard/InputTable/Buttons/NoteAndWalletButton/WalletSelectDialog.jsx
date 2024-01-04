import Avatar from '@mui/material/Avatar'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemAvatar from '@mui/material/ListItemAvatar'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import DialogTitle from '@mui/material/DialogTitle'
import Dialog from '@mui/material/Dialog'
import AddIcon from '@mui/icons-material/Add'
import { getWallets } from '~/lib/wallet_data'
import { useDispatch, useSelector } from 'react-redux'
import {
  toggleOffDialog,
  choseWallet
} from '~/redux/features/chosenWallet/chosenWalletSlice'

export default function WalletSelectDialog() {
  const isOpen = useSelector((state) => state.chosenWallet.toggle)
  const dispatch = useDispatch()

  return (
    <Dialog onClose={() => dispatch(toggleOffDialog())} open={isOpen}>
      <DialogTitle>Vui lòng chọn ví</DialogTitle>
      <List sx={{ pt: 0 }}>
        {getWallets().map((wallet, index) => (
          <ListItem disableGutters key={index}>
            <ListItemButton
              onClick={() => {
                dispatch(choseWallet(wallet.name))
                dispatch(toggleOffDialog())
              }}
            >
              <ListItemText primary={wallet.name} />
            </ListItemButton>
          </ListItem>
        ))}
        <ListItem disableGutters>
          <ListItemButton autoFocus onClick={() => dispatch(toggleOffDialog())}>
            <ListItemAvatar>
              <Avatar>
                <AddIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary='Tạo Thêm Ví' />
          </ListItemButton>
        </ListItem>
      </List>
    </Dialog>
  )
}
