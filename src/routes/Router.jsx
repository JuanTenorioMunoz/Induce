import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Profile from '../pages/Profile/Profile';
import Home from '../pages/Home/Home';
import LandingPage from '../pages/LandingPage/LandingPage';
import Curriculum from './../pages/Curriculum/Curriculum';
import Register from '../pages/Register/Register';
import SignIn from '../pages/SignIn/SignIn';
import Formulary from '../pages/Formulary/Formulary';
import Vacantes from '../pages/Vacantes/Vacantes';
import Configuracion from '../pages/Config/Config';

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/profile" element={<Profile/>}/>
                <Route path="/landing" element={<LandingPage/>}/>
                <Route path="/cv" element={<Curriculum/>}/>
                <Route path="/register" element={<Register/>}/>
                <Route path="/sign_in" element={<SignIn/>}/>
                <Route path="/Formulary" element={<Formulary/>}></Route>
                <Route path="/vacantes" element={<Vacantes/>}/>
                <Route path="/configuracion" element={<Configuracion/>}/>
                
            </Routes>
        </BrowserRouter>
    )
}

export default Router;