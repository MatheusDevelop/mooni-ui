import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import light from './theme/light'
import { CSSReset, ChakraProvider, ColorModeProvider } from '@chakra-ui/react'
import '@fontsource/ubuntu/400.css'
import '@fontsource/ubuntu/500.css'
import '@fontsource/montserrat/500.css'
import '@fontsource/montserrat/400.css'
import { BrowserRouter } from 'react-router-dom'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ChakraProvider theme={light}>
        <ColorModeProvider>
          <CSSReset />
          <App />
        </ColorModeProvider>
      </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
