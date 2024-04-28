import './App.css'
import NavbarHead from './components/NavbarHead'
import './css/NavbarHead.css'
import {Route,Routes} from 'react-router-dom'
import CourseList from './components/CourseList'
import Course from './components/Course'
import HomePage from './pages/HomePage'
import DetailPage from './pages/DetailPage'



function App() {
 

  return (
    <>
    <NavbarHead/>
    <Routes>
    <Route path="/anasayfa" element={<HomePage/>} />
   <Route path="/detay/:id" element={<DetailPage/>} />
    </Routes>
    </>
  )
}

export default App
