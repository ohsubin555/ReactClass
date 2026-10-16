import { Outlet } from 'react-router-dom';
import Header from '../../components/Header'; 
import Footer from '../../components/Footer'; 
import CityNav from '../../components/city/CityNav';

function CityLayout() { 
    return ( 
        <>
            <CityNav /> 
            <Outlet />  
        </> 
    ); 
}

export default CityLayout;