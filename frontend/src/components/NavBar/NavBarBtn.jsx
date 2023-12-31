import { Button } from '@mui/material'

const NavBarBtn = ({ title, path }) => {
  return (
    <Button
      sx={{
        backgroundColor: '#000',
        color: '#fff',
        borderRadius: '25px',
        width: '90%',
        mb: '7px'
      }}
      onClick={() => {
        window.location.href = path
      }}
    >
      {title}
    </Button>
  )
}

export default NavBarBtn
