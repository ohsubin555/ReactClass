import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
function MainLayout() { 
    return ( 
        <> 
          <Header />
          <section> 
            <main> 
              <Outlet /> 
            </main> 
          </section>
          <Footer /> 
        </> 
    ); 
}

export default MainLayout;