import React from 'react'
import ReactDOM from 'react-dom/client'
import { CssBaseline } from '@mui/material'
import { Experimental_CssVarsProvider as CssVarsProvider } from '@mui/material'
import { experimental_extendTheme as extendTheme } from '@mui/material'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Dashboard from './pages/Dashboard/Dashboard'
import Login from './pages/Login/Login'
import { Provider } from 'react-redux'
import { stateStorage } from './redux/stateStorage'

const appTheme = extendTheme({
  components: {
    MuiTypography: {
      styleOverrides: {
        root: { textAlign: 'center', lineHeight: 'normal', fontStyle: 'normal' }
      }
    }
  },
  typography: {
    mainTitle: { fontSize: '36px', fontWeight: '400' },
    bodyTitle: { fontSize: '30px', fontWeight: '300' }
  },
  // WHY BORDER RADIUS NOT WORKING? :d
  palette: {
    inYourPocket: {
      section: { bgColor: '#D9D9D9' },
      button: { bgColor: '#000', textColor: '#fff' },
      card: { incomeBgColor: 'green', outcomeBgColor: 'red' }
    }
  },
  useColorSchema: { light: {}, dark: {} }
})

const router = createBrowserRouter([
  { path: '/', element: <Login /> },
  { path: '/dashboard', element: <Dashboard /> }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CssVarsProvider theme={appTheme}>
      <CssBaseline />
      <Provider store={stateStorage}>
        <RouterProvider router={router} />
      </Provider>
    </CssVarsProvider>
  </React.StrictMode>
)
