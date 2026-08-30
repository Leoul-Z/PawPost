import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col font-body-md text-body-md antialiased selection:bg-primary-container selection:text-on-primary-container">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
