import React from 'react'
import ReactDOM from 'react-dom/client'
import { CssBaseline } from '@mui/material'
import { Experimental_CssVarsProvider as CssVarsProvider } from '@mui/material'
import { experimental_extendTheme as extendTheme } from '@mui/material'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './pages/Login/Login'
import Dashboard from './pages/Dashboard/Dashboard'

const appTheme = extendTheme({
  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          textAlign: 'center',
          lineHeight: 'normal',
          fontStyle: 'normal'
        }
      }
    }
  },
  typography: {
    mainTitle: { fontSize: '36px', fontWeight: '400' },
    bodyTitle: { fontSize: '30px', fontWeight: '300' }
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
      <RouterProvider router={router} />
      <CssBaseline />
    </CssVarsProvider>
  </React.StrictMode>
)
