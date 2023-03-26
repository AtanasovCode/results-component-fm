import React from 'react'
import ReactDOM from 'react-dom/client'

import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './GlobalStyles'

import App from './App'

const theme = {
  reactionColor: "hsl(0, 100%, 67%)",
  memoryColor: "hsl(39, 100%, 56%)",
  verbalColor: "hsl(166, 100%, 37%)",
  visualColor: "hsl(234, 85%, 45%)",

  lightBlue: "hsl(252, 100%, 67%)",
  royalBlue: "hsl(241, 81%, 54%)",

  backgroundMain: "hsl(0, 0%, 100%)",
  backgroundCard: "hsl(221, 100%, 96%)",
  fontFaded: "hsl(241, 100%, 89%)",

  buttonColor: "hsl(224, 30%, 27%)",

  fontFamily: "'Hanken Grotesk', sans-serif",
  fontRegular: "500",
  fontSemiBold: "700",
  fontBold: "800",
  fontSize: "18px",

}


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </React.StrictMode>
)
