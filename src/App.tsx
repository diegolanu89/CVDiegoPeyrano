import { CssBaseline, Container } from '@mui/material'
import CvPage from './pages/CvPage'

function App() {
  return (
    <>
      <CssBaseline />
      <Container maxWidth="md">
        <CvPage />
      </Container>
    </>
  )
}

export default App