import { Box, Typography } from '@mui/material'
import NavBarBtn from './NavBarBtn'

const NavBar = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '200px',
        height: 'fit-content',
        borderRadius: '16px',
        p: '5px',
        backgroundColor: '#D9D9D9'
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
