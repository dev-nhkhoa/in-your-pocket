// DASHBOARD PAGE

import { Box, Container, Typography } from '@mui/material'
import NavBar from './NavBar/NavBar'
import InputTable from './InputTable/InputTable'

const Dashboard = () => {
  return (
    <Container
      maxWidth='100%'
      disableGutters
      sx={{ display: 'flex', height: '100vh', py: '20px' }}
    >
      <NavBar />
      {/* Center: input table & show total money in pocket */}
      <Box
        sx={{
          width: '43%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}
      >
        {/* Box show money in your wallet */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: '#D9D9D9',
            color: '#000',
            width: '90%',
            height: 'auto',
            borderRadius: '25px',
            p: '20px 10px',
            gap: '5px'
          }}
        >
          <Typography sx={{ fontSize: '26px', textAlign: 'start' }}>
            Số Dư Tài Khoản:
          </Typography>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between'
            }}
          >
            <Typography sx={{ fontSize: '25px', fontWeight: 'bold' }}>
              Tổng:
            </Typography>
            <Typography sx={{ fontSize: '25px', fontWeight: 'bold' }}>
              300.000đ
            </Typography>
          </Box>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between'
            }}
          >
            <Typography sx={{ fontSize: '16px', fontWeight: 'light' }}>
              Ví cá nhân:
            </Typography>
            <Typography sx={{ fontSize: '16px', fontWeight: 'light' }}>
              200.000đ
            </Typography>
          </Box>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between'
            }}
          >
            <Typography sx={{ fontSize: '16px', fontWeight: 'light' }}>
              Ngân hàng:
            </Typography>
            <Typography sx={{ fontSize: '16px', fontWeight: 'light' }}>
              100.000đ
            </Typography>
          </Box>
        </Box>
        {/* Table */}
        <Box sx={{ paddingTop: '20px' }}>
          <InputTable />
        </Box>
      </Box>
      {/* Right: contains ( thu / chi ) logs */}
      <Box
        sx={{
          width: '43%',
          px: '20px',
          display: 'flex',
          flexDirection: 'column',
          gap: '10px'
        }}
      >
        <Typography
          sx={{ fontSize: '20px', fontWeight: 'bold', textAlign: 'start' }}
        >
          CHI TIÊU:
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'end' }}>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              width: '60%',
              backgroundColor: 'green',
              borderRadius: '26px',
              p: '10px'
            }}
          >
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              <Typography>31/12/2023</Typography>
              <Typography>12:12</Typography>
            </Box>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              <Typography
                sx={{
                  fontSize: '23px',
                  fontWeight: 'bold',
                  textAlign: 'right'
                }}
              >
                +300.000đ
              </Typography>
              <Typography sx={{ textAlign: 'right' }}>Nhận lương</Typography>
            </Box>
          </Box>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'end' }}>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              width: '60%',
              backgroundColor: 'red',
              borderRadius: '26px',
              p: '10px'
            }}
          >
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              <Typography>31/12/2023</Typography>
              <Typography>12:12</Typography>
            </Box>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              <Typography
                sx={{
                  fontSize: '23px',
                  fontWeight: 'bold',
                  textAlign: 'right'
                }}
              >
                -200.000đ
              </Typography>
              <Typography sx={{ textAlign: 'right' }}>Chi tiêu</Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Container>
  )
}

export default Dashboard
