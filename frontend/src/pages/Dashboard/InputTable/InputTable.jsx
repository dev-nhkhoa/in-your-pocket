import { Box } from '@mui/material'
import TableButton from './Buttons/TableButton'
import ResultScreen from './ResultScreen'
import ThuChiBtn from './Buttons/ThuChiButton'
import { SETTINGS } from '~/lib/settings'
import NoteAndWalletButton from './Buttons/NoteAndWalletButton/NoteAndWalletButton'

const InputTable = () => {
  if (SETTINGS.devMode) {
    // eslint-disable-next-line no-console
    console.log('Render Input Table')
  }
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
          <TableButton name='A/C' width={buttonWidth} height='70px' />
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <ThuChiBtn />
            <ResultScreen />
          </Box>
        </Box>
        {/* Second Row */}
        <Box sx={{ display: 'flex', gap: '10px' }}>
          <NoteAndWalletButton />
          <TableButton name='' width={buttonWidth} height={buttonHeight} />
          <TableButton name='*' width={buttonWidth} height={buttonHeight} />
        </Box>
        <Box sx={{ display: 'flex', gap: '10px' }}>
          <TableButton name='7' width={buttonWidth} height={buttonHeight} />
          <TableButton name='8' width={buttonWidth} height={buttonHeight} />
          <TableButton name='9' width={buttonWidth} height={buttonHeight} />
          <TableButton name='/' width={buttonWidth} height={buttonHeight} />
        </Box>
        {/* Third Row */}
        <Box sx={{ display: 'flex', gap: '10px' }}>
          <TableButton name='4' width={buttonWidth} height={buttonHeight} />
          <TableButton name='5' width={buttonWidth} height={buttonHeight} />
          <TableButton name='6' width={buttonWidth} height={buttonHeight} />
          <TableButton name='+' width={buttonWidth} height={buttonHeight} />
        </Box>
        {/* Second Row */}
        <Box sx={{ display: 'flex', gap: '10px' }}>
          <TableButton name='1' width={buttonWidth} height={buttonHeight} />
          <TableButton name='2' width={buttonWidth} height={buttonHeight} />
          <TableButton name='3' width={buttonWidth} height={buttonHeight} />
          <TableButton name='-' width={buttonWidth} height={buttonHeight} />
        </Box>
        {/* Second Row */}
        <Box sx={{ display: 'flex', gap: '10px' }}>
          <TableButton name='0' width={buttonWidth} height={buttonHeight} />
          <TableButton name='' width={buttonWidth} height={buttonHeight} />
          <Box>
            <TableButton name='ENTER' width={'135px'} height={'60px'} />
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default InputTable
