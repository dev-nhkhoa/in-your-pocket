import { Box, Container, useMediaQuery } from '@mui/material'
import NavBar from '~/components/NavBar/NavBar'
import InputTable from './InputTable/InputTable'
import ChiTieuLog from '~/components/ChiTieuLog/ChiTieuLog'
import WalletScreen from '~/components/Wallet/WalletScreen/WalletScreen'

const Dashboard = () => {
  const isShowNavBarAndChiTieu = useMediaQuery((theme) =>
    theme.breakpoints.up('lg')
  )

  return (
    <Container
      disableGutters
      sx={{
        display: 'flex',
        height: '100vh',
        justifyContent: 'center'
      }}
    >
      <Box
        sx={{
          display: 'flex',
          paddingTop: '20px',
          justifyContent: 'center',
          alignItems: { lg: 'normal', xs: 'center' },
          flexDirection: { lg: 'row', xs: 'column' },
          gap: '10px'
        }}
      >
        {isShowNavBarAndChiTieu && <NavBar />}
        {!isShowNavBarAndChiTieu && <WalletScreen />}
        <InputTable />
        {isShowNavBarAndChiTieu && (
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <WalletScreen />
            <ChiTieuLog />
          </Box>
        )}
      </Box>
    </Container>
  )
}

export default Dashboard
