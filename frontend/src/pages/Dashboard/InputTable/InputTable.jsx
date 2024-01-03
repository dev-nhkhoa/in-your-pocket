import { Box } from '@mui/material'
import TableButton from './TableButton'
import ResultScreen from './ResultScreen'

//TODO: XỬ LÍ NHẬP SỐ TỪ TABLE

const InputTable = () => {
  const buttonWidth = '60px'
  const buttonHeight = '60px'
  return (
    <Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '10px',
          backgroundColor: 'inYourPocket.section.bgColor',
          borderRadius: '16px',
          p: '10px'
        }}
      >
        {/* First row of the table */}
        <Box sx={{ display: 'flex', gap: '10px' }}>
          <TableButton name='A/C' width={buttonWidth} height={buttonHeight} />
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <Box sx={{ display: 'flex', gap: '10px' }}>
              <TableButton name='Thu' width={'101px'} height={'25px'} />
              <TableButton name='Chi' width={'101px'} height={'25px'} />
            </Box>
            <ResultScreen />
          </Box>
        </Box>
        {/* Second Row */}
        <Box sx={{ display: 'flex', gap: '10px' }}>
          <TableButton name='7' width={buttonWidth} height={buttonHeight} />
          <TableButton name='8' width={buttonWidth} height={buttonHeight} />
          <TableButton name='9' width={buttonWidth} height={buttonHeight} />
          <TableButton name='Ví' width={buttonWidth} height={buttonHeight} />
        </Box>
        {/* Third Row */}
        <Box sx={{ display: 'flex', gap: '10px' }}>
          <TableButton name='4' width={buttonWidth} height={buttonHeight} />
          <TableButton name='5' width={buttonWidth} height={buttonHeight} />
          <TableButton name='6' width={buttonWidth} height={buttonHeight} />
          <TableButton name='Ví' width={buttonWidth} height={buttonHeight} />
        </Box>
        {/* Second Row */}
        <Box sx={{ display: 'flex', gap: '10px' }}>
          <TableButton name='1' width={buttonWidth} height={buttonHeight} />
          <TableButton name='2' width={buttonWidth} height={buttonHeight} />
          <TableButton name='3' width={buttonWidth} height={buttonHeight} />
          <TableButton name='Ví' width={buttonWidth} height={buttonHeight} />
        </Box>
        {/* Second Row */}
        <Box sx={{ display: 'flex', gap: '10px' }}>
          <TableButton name='0' width={buttonWidth} height={buttonHeight} />
          <TableButton name='' width={buttonWidth} height={buttonHeight} />
          <Box>
            <TableButton name='ENTER' width={'140px'} height={'60px'} />
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default InputTable
