import { Box, Button, Typography } from '@mui/material'
import NavBarBtn from './NavBarBtn'

const NavBar = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '14%'
      }}
    >
      <Typography sx={{ fontSize: '16px', pb: '50px' }}>
        IN YOUR POCKET
      </Typography>
      <NavBarBtn title={'Ví Của Bạn'} path='/dashboard' />
      <NavBarBtn title={'Phân Tích'} path='/dashboard' />
      <NavBarBtn title={'Cài Đặt'} path='/dashboard' />
      <NavBarBtn title={'Thoát'} path='/dashboard' />
    </Box>
  )
}

export default NavBar
