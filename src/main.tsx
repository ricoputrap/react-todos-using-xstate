import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

const theme = extendTheme({
  colors: {
    primary: "#606060",
    secondary: "#8A8A8A",
    soft: "#AAAAAA",
    border: "#BCBCBC",
    background: "#3073F5"
  }
})

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider theme={ theme }>
      <App />
    </ChakraProvider>
  </React.StrictMode>
)
