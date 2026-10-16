import { Link } from 'react-router-dom';

function Home() { 
    return ( 
        <> 
            <h1>Home 세계의 도시</h1>
            <p>이미지를 클릭하여 도시를 둘러보세요.</p>
            <div className="city-container"> 
                {/* London */} 
                <Link to="/city/london" className="city-card"> 
                    <img src="https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=600&q=80" alt="London" /> 
                    <h2>London</h2> 
                </Link>
                
                {/* Paris */} 
                <Link to="/city/paris" className="city-card"> 
                    <img src="https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=600&q=80" alt="Paris" /> 
                    <h2>Paris</h2> 
                </Link>
                
                {/* Seoul */} 
                <Link to="/city/seoul" className="city-card"> 
                    <img src="https://images.unsplash.com/photo-1546874177-9e664107314e?auto=format&fit=crop&w=600&q=80" alt="Seoul" /> 
                    <h2>Seoul</h2> 
                </Link> 
            </div> 
        </> 
    ); 
}

export default Home;