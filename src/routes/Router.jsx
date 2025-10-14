import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './../App';
import Profile from '../pages/Profile/Profile';
import Home from '../pages/Home/Home';


const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/profile" element={<Profile/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Router;