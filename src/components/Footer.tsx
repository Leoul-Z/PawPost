import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-surface-container-highest border-t border-surface-variant pt-20 pb-10">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
        <div className="md:col-span-4">
          <Link className="font-display-lg text-display-lg text-primary mb-6 block" to="/">ሸገር Petland</Link>
          <p className="font-body-md text-body-md text-on-surface-variant mb-6 pr-4">Artisanal goods for your best friend. Carefully curated, thoughtfully crafted.</p>
          <div className="flex space-x-4">
            <a className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-primary hover:bg-primary hover:text-on-primary transition-colors duration-300" href="https://www.instagram.com/sheger_petland/?__pwa=1#" target="_blank" rel="noopener noreferrer">
              <span className="sr-only">Instagram</span>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"></path></svg>
            </a>
            <a className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-primary hover:bg-primary hover:text-on-primary transition-colors duration-300" href="https://www.tiktok.com/@sheger_petnikita" target="_blank" rel="noopener noreferrer">
              <span className="sr-only">TikTok</span>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 15.68a6.34 6.34 0 0 0 6.27 6.34 6.32 6.32 0 0 0 6.3-6.3V8.89a8.16 8.16 0 0 0 4.7 1.54V6.99a5.04 5.04 0 0 1-2.68-.3z"/></svg>
            </a>
          </div>
        </div>
        <div className="md:col-span-2 md:col-start-7">
          <h3 className="font-headline-md text-headline-md text-on-surface mb-6">Shop</h3>
          <ul className="space-y-4">
            <li><Link className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors" to="/residents">Companions</Link></li>
            <li><Link className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors" to="/shop">Accessories</Link></li>
          </ul>
        </div>
        <div className="md:col-span-2">
          <h3 className="font-headline-md text-headline-md text-on-surface mb-6">About</h3>
          <ul className="space-y-4">
            <li><Link className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors" to="/story">Our Story</Link></li>
            <li><Link className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors" to="/visit">Contact</Link></li>
          </ul>
        </div>
      </div>
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop pt-8 border-t border-surface-variant/50 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="font-caption text-caption text-on-surface-variant">© 2026 ሸገር Petland. All rights reserved.</p>
        <div className="flex space-x-6">
          <Link className="font-caption text-caption text-on-surface-variant hover:text-primary transition-colors" to="/privacy">Privacy Policy</Link>
          <Link className="font-caption text-caption text-on-surface-variant hover:text-primary transition-colors" to="/terms">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
