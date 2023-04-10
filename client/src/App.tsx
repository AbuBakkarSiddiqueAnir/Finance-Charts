import { Box, CssBaseline, ThemeProvider, createTheme } from "@mui/material"
import { useMemo } from "react"
import { themeSettings } from "./theme"
import { BrowserRouter } from "react-router-dom"
import {Routes, Route} from 'react-router-dom'
import { Navbar } from "./scenes"

function App() {
  const theme = useMemo(()=>createTheme(themeSettings),[])

  return (
    <div className="app">
      <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline/>
        <Box width='100%' height='100%' padding='1rem 2rem 4rem 2rem'>
          <Navbar/>
         <Routes>
          <Route path='/' element={<div>dashboard</div>}/>
          <Route path='/predictions' element={<div>Predictions</div>}/>



         </Routes>
        </Box>

      </ThemeProvider>
      </BrowserRouter>

    </div>
  )
}

export default App