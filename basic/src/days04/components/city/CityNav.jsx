import { NavLink } from 'react-router-dom';

function CityNav() { 
    return ( 
        <nav> 
          <ul> 
            <li> <NavLink to="/city/london" className={({ isActive }) => isActive ? 'active' : '' } > London </NavLink> </li>
            <li> <NavLink to="/city/paris" className={({ isActive }) => isActive ? 'active' : '' } > Paris </NavLink> </li>
            <li> <NavLink to="/city/seoul" className={({ isActive }) => isActive ? 'active' : '' } > Seoul </NavLink> </li> 
          </ul>
        </nav> 
    ); 
}

export default CityNav;