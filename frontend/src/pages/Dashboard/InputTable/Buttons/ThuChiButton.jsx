import { Box } from '@mui/material'
import TableButton from './TableButton'
import { useSelector } from 'react-redux'
import { SETTINGS } from '~/lib/settings'

const ThuChiBtn = () => {
  if (SETTINGS.devMode) {
    // eslint-disable-next-line no-console
    console.log('Render ThuChi Btn')
  }
  const isThu =
    useSelector((state) => state.thuChi.toggle) === 'Thu' ? true : false

  const thuBtnWhenClick = {
    backgroundColor: isThu ? 'inYourPocket.button.bgColor' : '#777'
  }

  const chiBtnWhenClick = {
    backgroundColor: isThu ? '#777' : 'inYourPocket.button.bgColor'
  }
  return (
    <Box sx={{ display: 'flex', gap: '10px' }}>
      <TableButton
        name='Thu'
        width={'100px'}
        height={'30px'}
        props={thuBtnWhenClick}
      />
      <TableButton
        name='Chi'
        width={'100px'}
        height={'30px'}
        props={chiBtnWhenClick}
      />
    </Box>
  )
}

export default ThuChiBtn
