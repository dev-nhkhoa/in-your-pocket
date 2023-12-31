import { Button, Typography } from '@mui/material'

const TableButton = ({ name, width, height, props }) => {
  return (
    <Button
      sx={{
        width: width,
        height: height,
        backgroundColor: '#000',
        borderRadius: '16px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        ...props
      }}
      onClick={() => {}}
    >
      <Typography sx={{ color: '#fff', fontSize: '20px' }}>{name}</Typography>
    </Button>
  )
}

export default TableButton
