import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { useStore } from '../context/StoreContext';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { basketItems } = useStore();
  const location = useLocation();

  const handleSearch = () => {
    alert('Search functionality would open here.');
  };

  const basketCount = basketItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <header className="w-full top-0 sticky bg-background/80 backdrop-blur-md shadow-sm shadow-on-surface/5 z-40">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop flex justify-between items-center h-20">
        <Link className="font-display-lg text-display-lg text-primary tracking-tighter cursor-pointer active:scale-95 hover:scale-105 transition-transform duration-200" to="/">
          Pawpost
        </Link>
        <nav className="hidden md:flex space-x-6 items-center flex-1 justify-center ml-8">
          <Link className={`transition-colors duration-200 font-body-md text-body-md ${location.pathname === '/' ? 'text-primary font-bold' : 'text-on-surface-variant hover:text-primary'}`} to="/">Home</Link>
          <Link className={`transition-colors duration-200 font-body-md text-body-md ${location.pathname.startsWith('/resident') ? 'text-primary font-bold' : 'text-on-surface-variant hover:text-primary'}`} to="/residents">Pets</Link>
          <Link className={`transition-colors duration-200 font-body-md text-body-md ${location.pathname.startsWith('/shop') || location.pathname.startsWith('/product') ? 'text-primary font-bold' : 'text-on-surface-variant hover:text-primary'}`} to="/shop">Shop</Link>
          <Link className={`transition-colors duration-200 font-body-md text-body-md ${location.pathname === '/story' ? 'text-primary font-bold' : 'text-on-surface-variant hover:text-primary'}`} to="/story">Our Story</Link>
          <Link className={`transition-colors duration-200 font-body-md text-body-md ${location.pathname === '/visit' ? 'text-primary font-bold' : 'text-on-surface-variant hover:text-primary'}`} to="/visit">Visit Us</Link>
          <div className="w-px h-5 bg-outline-variant mx-2"></div>
          <Link className={`transition-colors duration-200 font-body-md text-body-md ${location.pathname === '/login' ? 'text-primary font-bold' : 'text-on-surface-variant hover:text-primary'}`} to="/login">Login</Link>
          <Link className={`transition-colors duration-200 font-body-md text-body-md ${location.pathname === '/join' ? 'text-primary font-bold' : 'text-on-surface-variant font-semibold hover:text-primary'}`} to="/join">Register</Link>
        </nav>
        <div className="flex items-center space-x-4">
          {location.pathname === '/shop' && (
            <button onClick={handleSearch} aria-label="Search" className="text-primary hover:scale-105 transition-transform duration-200 active:scale-95">
              <span className="material-symbols-outlined" style={{ fontVariationSettings: `"'FILL' 0"` }}>search</span>
            </button>
          )}
          <Link to="/favorites" aria-label="Favorites" className="text-primary hover:scale-105 transition-transform duration-200 active:scale-95">
            <span className="material-symbols-outlined" style={{ fontVariationSettings: `"'FILL' 0"` }}>favorite</span>
          </Link>
          <Link to="/basket" aria-label="Shopping Basket" className="text-primary hover:scale-105 transition-transform duration-200 active:scale-95 relative">
            <span className="material-symbols-outlined" style={{ fontVariationSettings: `"'FILL' 0"` }}>shopping_basket</span>
            {basketCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-secondary text-on-secondary text-[10px] font-bold h-4 w-4 rounded-full flex items-center justify-center">
                {basketCount}
              </span>
            )}
          </Link>
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
            aria-label="Menu" 
            className="md:hidden text-primary hover:scale-105 transition-transform duration-200 active:scale-95"
          >
            <span className="material-symbols-outlined">{isMobileMenuOpen ? 'close' : 'menu'}</span>
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-surface-container-lowest border-t border-surface-variant shadow-lg py-4 px-margin-mobile flex flex-col space-y-4">
          <Link onClick={() => setIsMobileMenuOpen(false)} className={`font-headline-md text-[18px] ${location.pathname === '/' ? 'text-primary font-bold' : 'text-on-surface'}`} to="/">Home</Link>
          <Link onClick={() => setIsMobileMenuOpen(false)} className={`font-headline-md text-[18px] ${location.pathname.startsWith('/resident') ? 'text-primary font-bold' : 'text-on-surface'}`} to="/residents">Pets</Link>
          <Link onClick={() => setIsMobileMenuOpen(false)} className={`font-headline-md text-[18px] ${location.pathname.startsWith('/shop') || location.pathname.startsWith('/product') ? 'text-primary font-bold' : 'text-on-surface'}`} to="/shop">Shop</Link>
          <Link onClick={() => setIsMobileMenuOpen(false)} className={`font-headline-md text-[18px] ${location.pathname === '/story' ? 'text-primary font-bold' : 'text-on-surface'}`} to="/story">Our Story</Link>
          <Link onClick={() => setIsMobileMenuOpen(false)} className={`font-headline-md text-[18px] ${location.pathname === '/visit' ? 'text-primary font-bold' : 'text-on-surface'}`} to="/visit">Visit Us</Link>
          <hr className="border-surface-variant" />
          <Link onClick={() => setIsMobileMenuOpen(false)} className={`font-headline-md text-[18px] ${location.pathname === '/login' ? 'text-primary font-bold' : 'text-on-surface'}`} to="/login">Login</Link>
          <Link onClick={() => setIsMobileMenuOpen(false)} className={`font-headline-md text-[18px] ${location.pathname === '/join' ? 'text-primary font-bold' : 'text-on-surface'}`} to="/join">Register</Link>
        </div>
      )}
    </header>
  );
};

export default Header;
