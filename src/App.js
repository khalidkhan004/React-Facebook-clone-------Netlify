import React from 'react'
import Sidebar from './components/Sidebar'
import Feed from './components/Feed'
import Navbar from './components/Navbar'
import Rightbar from './components/Rightbar'
import { Box ,Stack} from '@mui/material'

const App = () => {
  return (
    <Box>
      <Navbar/>
      <Stack direction="row" spacing={2} justifyContent="space-between">
      <Feed/>
      <Rightbar/>
      <Sidebar/>
      </Stack>
    </Box>
  )
}

export default App

