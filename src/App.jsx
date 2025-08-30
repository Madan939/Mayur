
import { Route, Routes } from 'react-router-dom'
import Tour from './pages/Tours'
import Package1 from './pages/ToursPackage/Package1'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Tour />} />
        <Route path='/dubai-3-nights-4-days-package-explore-dubai' element={<Package1/>}/>
      </Routes>
    </>
  )
}

export default App
