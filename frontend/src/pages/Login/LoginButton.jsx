import { Button } from '@mui/material'

// TODO: CHANGE BTN COLOR WHEN HOVER, THE DEFAULT COLOR IS SUCK!

const LoginButton = ({ title, bgColor, color }) => {
  return (
    <Button
      variant='contained'
      sx={{
        backgroundColor: bgColor,
        color: color,
        width: '398px',
        paddingY: '10px',
        borderRadius: '25px'
      }}
      onClick={() => {
        window.location.href = '/dashboard'
      }}
    >
      {title}
    </Button>
  )
}

export default LoginButton
