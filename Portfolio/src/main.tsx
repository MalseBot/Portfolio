import ReactDOM from 'react-dom/client'
import './index.css'
import { BG } from './assets'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Home.tsx'
import NavBar from './NavBar.tsx'
import Projects from './Projects.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <img src={BG} className=' -z-50 fixed w-full h-screen' />
    <NavBar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/Projects' element={<Projects/>}/>
    </Routes>
  </BrowserRouter>
)
