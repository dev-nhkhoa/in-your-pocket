import { Button, Typography } from '@mui/material'

const TableButton = ({ name, width, height }) => {
  return (
    <Button
      sx={{
        width: width,
        height: height,
        backgroundColor: '#D9D9D9',
        borderRadius: '16px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
      onClick={() => {}}
    >
      <Typography sx={{ color: '#000', fontSize: '20px' }}>{name}</Typography>
    </Button>
  )
}

export default TableButton
