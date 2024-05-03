import './App.css'
import NavbarHead from './components/NavbarHead'
import './css/NavbarHead.css'
import {Route,Routes} from 'react-router-dom'
import HomePage from './pages/HomePage'
import DetailPage from './pages/DetailPage'
import Footer from './pages/Footer'



function App() {
 

  return (
    <>
    <NavbarHead/>
    <Routes>
   <Route path="/" element={<HomePage/>} />
   <Route path="/anasayfa" element={<HomePage/>} />
   <Route path="/detay/:id" element={<DetailPage/>} />
    </Routes>
    <Footer/>
    </>
  )
}

export default App
