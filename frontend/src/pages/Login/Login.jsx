import { Box, Container, Typography } from '@mui/material'
import InputField from './InputField'
import LoginButton from './LoginButton'

// TODO: CHANGE PASSWORD INPUT TO HIDE WORDS WHEN USER INPUT TEXT

const Login = () => {
  return (
    <Container
      maxWidth='100%'
      disableGutters
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}
    >
      {/* Title In your pocket */}
      <Box
        sx={{
          display: 'flex',
          width: '100%',
          justifyContent: 'center',
          paddingTop: '80px'
        }}
      >
        <Typography variant='mainTitle'>IN YOUR POCKET</Typography>
      </Box>

      {/* Login Section */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          paddingTop: '80px',
          alignItems: 'start',
          gap: '12px',
          width: '372px'
        }}
      >
        <Typography variant='bodyTitle'>username:</Typography>
        <InputField id='username' />
        <Typography variant='bodyTitle'>password:</Typography>
        <InputField id='password' />

        {/* Login Buttons */}
        <Box
          sx={{
            paddingTop: '20px',
            display: 'flex',
            flexDirection: 'column',
            gap: '10px'
          }}
        >
          <LoginButton title='Sign In' bgColor='#000' color='#fff' />
          <LoginButton title='Sign Up' bgColor='#D0D0D0' color='#000' />
        </Box>
      </Box>
    </Container>
  )
}

export default Login
