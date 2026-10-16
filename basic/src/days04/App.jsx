import { Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout'; 
import CityLayout from './layouts/city/CityLayout';
import Home from './pages/Home'; 
import London from './pages/city/London';
import Paris from './pages/city/Paris'; 
import Seoul from './pages/city/Seoul';

function App() { 
    return ( 
        <Routes> 
            <Route element={<MainLayout />}> 
            <Route path="/" element={<Home />} />
            <Route element={<CityLayout />}> 
            <Route path="/city/london" element={<London />} /> 
            <Route path="/city/paris" element={<Paris />} /> 
            <Route path="/city/seoul" element={<Seoul />} /> 
            </Route> </Route> 
        </Routes> 
    ); 
}

export default App;