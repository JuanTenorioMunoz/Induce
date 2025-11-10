import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Profile from '../pages/Profile/Profile';
import Home from '../pages/Home/Home';
import LandingPage from '../pages/LandingPage/LandingPage';
import Curriculum from './../pages/Curriculum/Curriculum';
import Register from '../pages/Register/Register';


const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/profile" element={<Profile/>}/>
                <Route path="/landing" element={<LandingPage/>}/>
                <Route path="/cv" element={<Curriculum/>}/>
                <Route path="/Register" element={<Register/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Router;