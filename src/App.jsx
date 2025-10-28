import './App.css'
import Home from './pages/Home/Home'
import Profile from './pages/Profile/Profile'
import LandingPage from './pages/LandingPage/LandingPage'
import { BrowserRouter } from 'react-router-dom'

function App() {

  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/landing" element={<LandingPage/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default App
