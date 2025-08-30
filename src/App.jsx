
import { Route, Routes } from 'react-router-dom'
import Tour from './pages/Tours'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Tour />} />
      </Routes>
    </>
  )
}

export default App
