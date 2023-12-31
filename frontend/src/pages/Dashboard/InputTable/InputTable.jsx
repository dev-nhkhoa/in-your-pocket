import { Box } from '@mui/material'
import TableButton from './TableButton'

const InputTable = () => {
  return (
    <Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '10px',
          backgroundColor: '#D9D9D9',
          borderRadius: '16px',
          p: '10px'
        }}
      >
        {/* First row of the table */}
        <Box sx={{ display: 'flex', gap: '10px' }}>
          <TableButton name='A/C' width={'64px'} height={'64px'} />
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <Box sx={{ display: 'flex', gap: '10px' }}>
              <TableButton name='Thu' width={'101px'} height={'27px'} />
              <TableButton name='Chi' width={'101px'} height={'27px'} />
            </Box>
            <Box>
              <TableButton name='đ' width={'212px'} height={'27px'} />
            </Box>
          </Box>
        </Box>
        {/* Second Row */}
        <Box sx={{ display: 'flex', gap: '10px' }}>
          <TableButton name='7' width={'64px'} height={'64px'} />
          <TableButton name='8' width={'64px'} height={'64px'} />
          <TableButton name='9' width={'64px'} height={'64px'} />
          <TableButton name='Ví' width={'64px'} height={'64px'} />
        </Box>
        {/* Third Row */}
        <Box sx={{ display: 'flex', gap: '10px' }}>
          <TableButton name='4' width={'64px'} height={'64px'} />
          <TableButton name='5' width={'64px'} height={'64px'} />
          <TableButton name='6' width={'64px'} height={'64px'} />
          <TableButton name='Ví' width={'64px'} height={'64px'} />
        </Box>
        {/* Second Row */}
        <Box sx={{ display: 'flex', gap: '10px' }}>
          <TableButton name='1' width={'64px'} height={'64px'} />
          <TableButton name='2' width={'64px'} height={'64px'} />
          <TableButton name='3' width={'64px'} height={'64px'} />
          <TableButton name='Ví' width={'64px'} height={'64px'} />
        </Box>
        {/* Second Row */}
        <Box sx={{ display: 'flex', gap: '10px' }}>
          <TableButton name='0' width={'64px'} height={'64px'} />
          <TableButton name='' width={'64px'} height={'64px'} />
          <Box>
            <TableButton name='ENTER' width={'138px'} height={'64px'} />
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default InputTable
