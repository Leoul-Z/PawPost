import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { useStore } from '../context/StoreContext';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { basketItems } = useStore();
  const location = useLocation();



  const basketCount = basketItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <header className="w-full top-0 sticky bg-background/80 backdrop-blur-md shadow-sm shadow-on-surface/5 z-40">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop flex justify-between items-center h-20">
        <Link className="font-display-lg text-[24px] md:text-[32px] lg:text-display-lg whitespace-nowrap text-primary tracking-tighter cursor-pointer active:scale-95 hover:scale-105 transition-transform duration-200" to="/">
          ሸገር Petland
        </Link>
        <nav className="hidden md:flex space-x-6 items-center flex-1 justify-center ml-8">
          <Link className={`transition-colors duration-200 font-body-md text-body-md ${location.pathname === '/' ? 'text-primary font-bold' : 'text-on-surface-variant hover:text-primary'}`} to="/">Home</Link>
          <Link className={`transition-colors duration-200 font-body-md text-body-md ${location.pathname.startsWith('/resident') ? 'text-primary font-bold' : 'text-on-surface-variant hover:text-primary'}`} to="/residents">Pets</Link>
          <Link className={`transition-colors duration-200 font-body-md text-body-md ${location.pathname.startsWith('/shop') || location.pathname.startsWith('/product') ? 'text-primary font-bold' : 'text-on-surface-variant hover:text-primary'}`} to="/shop">Shop</Link>
          <Link className={`transition-colors duration-200 font-body-md text-body-md ${location.pathname === '/story' ? 'text-primary font-bold' : 'text-on-surface-variant hover:text-primary'}`} to="/story">Our Story</Link>
          <Link className={`transition-colors duration-200 font-body-md text-body-md ${location.pathname === '/visit' ? 'text-primary font-bold' : 'text-on-surface-variant hover:text-primary'}`} to="/visit">Contact</Link>
        </nav>
        <div className="flex items-center space-x-4">

          <Link to="/login" aria-label="Login" className="text-primary hover:scale-105 transition-transform duration-200 active:scale-95">
            <span className="material-symbols-outlined" style={{ fontVariationSettings: `"'FILL' 0"` }}>person</span>
          </Link>
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
        <div className="md:hidden absolute top-20 left-0 w-full bg-[#fdfbf7]/95 backdrop-blur-2xl border-t border-[#e4e1da] shadow-[0_20px_40px_-15px_rgba(196,164,132,0.3)] rounded-b-3xl p-6 flex flex-col gap-2 z-50">
          <Link onClick={() => setIsMobileMenuOpen(false)} className={`flex items-center gap-4 px-4 py-3 rounded-2xl transition-all duration-200 ${location.pathname === '/' ? 'bg-[#f0eee7] text-[#1e1e1e] font-bold' : 'text-[#8e8574] hover:bg-[#f5f3ef] hover:text-[#1e1e1e]'}`} to="/">
            <span className="material-symbols-outlined" style={{ fontVariationSettings: `"'FILL' ${location.pathname === '/' ? 1 : 0}"` }}>home</span>
            <span className="font-label-lg text-[18px]">Home</span>
          </Link>
          <Link onClick={() => setIsMobileMenuOpen(false)} className={`flex items-center gap-4 px-4 py-3 rounded-2xl transition-all duration-200 ${location.pathname.startsWith('/resident') ? 'bg-[#f0eee7] text-[#1e1e1e] font-bold' : 'text-[#8e8574] hover:bg-[#f5f3ef] hover:text-[#1e1e1e]'}`} to="/residents">
            <span className="material-symbols-outlined" style={{ fontVariationSettings: `"'FILL' ${location.pathname.startsWith('/resident') ? 1 : 0}"` }}>pets</span>
            <span className="font-label-lg text-[18px]">Meet Our Pets</span>
          </Link>
          <Link onClick={() => setIsMobileMenuOpen(false)} className={`flex items-center gap-4 px-4 py-3 rounded-2xl transition-all duration-200 ${location.pathname.startsWith('/shop') || location.pathname.startsWith('/product') ? 'bg-[#f0eee7] text-[#1e1e1e] font-bold' : 'text-[#8e8574] hover:bg-[#f5f3ef] hover:text-[#1e1e1e]'}`} to="/shop">
            <span className="material-symbols-outlined" style={{ fontVariationSettings: `"'FILL' ${location.pathname.startsWith('/shop') || location.pathname.startsWith('/product') ? 1 : 0}"` }}>shopping_bag</span>
            <span className="font-label-lg text-[18px]">Shop</span>
          </Link>
          <Link onClick={() => setIsMobileMenuOpen(false)} className={`flex items-center gap-4 px-4 py-3 rounded-2xl transition-all duration-200 ${location.pathname === '/story' ? 'bg-[#f0eee7] text-[#1e1e1e] font-bold' : 'text-[#8e8574] hover:bg-[#f5f3ef] hover:text-[#1e1e1e]'}`} to="/story">
            <span className="material-symbols-outlined" style={{ fontVariationSettings: `"'FILL' ${location.pathname === '/story' ? 1 : 0}"` }}>auto_stories</span>
            <span className="font-label-lg text-[18px]">Our Story</span>
          </Link>
          <Link onClick={() => setIsMobileMenuOpen(false)} className={`flex items-center gap-4 px-4 py-3 rounded-2xl transition-all duration-200 ${location.pathname === '/visit' ? 'bg-[#f0eee7] text-[#1e1e1e] font-bold' : 'text-[#8e8574] hover:bg-[#f5f3ef] hover:text-[#1e1e1e]'}`} to="/visit">
            <span className="material-symbols-outlined" style={{ fontVariationSettings: `"'FILL' ${location.pathname === '/visit' ? 1 : 0}"` }}>location_on</span>
            <span className="font-label-lg text-[18px]">Contact</span>
          </Link>
          
          <hr className="border-[#e4e1da] my-2 mx-4" />
          
          <Link onClick={() => setIsMobileMenuOpen(false)} className={`flex items-center gap-4 px-4 py-3 rounded-2xl transition-all duration-200 ${location.pathname === '/login' ? 'bg-[#f0eee7] text-[#1e1e1e] font-bold' : 'text-[#8e8574] hover:bg-[#f5f3ef] hover:text-[#1e1e1e]'}`} to="/login">
            <span className="material-symbols-outlined" style={{ fontVariationSettings: `"'FILL' ${location.pathname === '/login' ? 1 : 0}"` }}>login</span>
            <span className="font-label-lg text-[18px]">Login</span>
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
