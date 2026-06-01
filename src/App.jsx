import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import MainLayout from './components/layout/MainLayout'
import { ThemeProvider, CssBaseline } from '@mui/material'
import theme from './theme/theme'

function App() {

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <MainLayout />
    </ThemeProvider>
  )
}

export default App
