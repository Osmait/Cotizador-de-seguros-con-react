import { CotizadorProvider } from './context/CotizadorProvider'
import { useState } from 'react'
import { AppSeguro } from './components/AppSeguro'


function App() {


  return (
    <CotizadorProvider>
      <AppSeguro />
    </CotizadorProvider>
  )
}

export default App
