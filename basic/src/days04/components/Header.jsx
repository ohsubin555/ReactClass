import { Link } from 'react-router-dom';
function Header() { 
    return ( 
        <header> <h2>Cities</h2>
        <div style={{ textAlign: 'right' }}> <Link to="/">Home</Link> </div> </header> 
        ); 
}

export default Header;
