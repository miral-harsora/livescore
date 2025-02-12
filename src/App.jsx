import './App.css'
import Navbar from './components/Navbar'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Score from './pages/Score'
import PopularPlayer from './pages/PopularPlayer'
import About from './pages/About'
import Contact from './pages/Contact'
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
        <Route path="/" element={<Dashboard />} />
          {/* <Route path="/home" element={<Dashboard />} /> */}
          <Route path="/score" element={<Score />} />
          <Route path="/popularplayer" element={<PopularPlayer />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
