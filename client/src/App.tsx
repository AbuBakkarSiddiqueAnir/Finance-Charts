import { Box, CssBaseline, ThemeProvider, createTheme } from "@mui/material"
import { useMemo } from "react"
import { themeSettings } from "./theme"
import { BrowserRouter } from "react-router-dom"
import {Routes, Route} from 'react-router-dom'
import { Navbar, Dashboard } from "@/scenes"


function App() {
  const theme = useMemo(()=>createTheme(themeSettings),[])
  const them2e = createTheme(themeSettings)

  console.log(theme,them2e)

  return (
    <div className="app">
      <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline/>
        <Box width='100%' height='100%' padding='1rem 2rem 4rem 2rem'>
          <Navbar/>
         <Routes>
          <Route path='/' element={<Dashboard/>}/>
          <Route path='/predictions' element={<div>Predictions</div>}/>

         </Routes>
        </Box>

      </ThemeProvider>
      </BrowserRouter>

    </div>
  )
}

export default App
