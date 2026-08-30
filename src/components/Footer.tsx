import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-surface-container-highest border-t border-surface-variant pt-20 pb-10">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
        <div className="md:col-span-4">
          <Link className="font-display-lg text-display-lg text-primary mb-6 block" to="/">Pawpost</Link>
          <p className="font-body-md text-body-md text-on-surface-variant mb-6 pr-4">Artisanal goods for your best friend. Carefully curated, thoughtfully crafted.</p>
          <div className="flex space-x-4">
            <a className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-primary hover:bg-primary hover:text-on-primary transition-colors duration-300" href="#">
              <span className="sr-only">Instagram</span>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"></path></svg>
            </a>
            <a className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-primary hover:bg-primary hover:text-on-primary transition-colors duration-300" href="#">
              <span className="sr-only">Pinterest</span>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.951-7.252 4.168 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.367 18.625 0 12.017 0z"></path></svg>
            </a>
          </div>
        </div>
        <div className="md:col-span-2 md:col-start-7">
          <h3 className="font-headline-md text-headline-md text-on-surface mb-6">Shop</h3>
          <ul className="space-y-4">
            <li><Link className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors" to="/residents">Companions</Link></li>
            <li><Link className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors" to="/shop">Accessories</Link></li>
            <li><Link className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors" to="/new">New Arrivals</Link></li>
            <li><Link className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors" to="/gift">Gift Cards</Link></li>
          </ul>
        </div>
        <div className="md:col-span-2">
          <h3 className="font-headline-md text-headline-md text-on-surface mb-6">About</h3>
          <ul className="space-y-4">
            <li><Link className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors" to="/story">Our Story</Link></li>
            <li><Link className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors" to="/visit">Visit Us</Link></li>
            <li><Link className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors" to="/journal">Journal</Link></li>
            <li><Link className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors" to="/contact">Contact</Link></li>
          </ul>
        </div>
        <div className="md:col-span-2">
          <h3 className="font-headline-md text-headline-md text-on-surface mb-6">Support</h3>
          <ul className="space-y-4">
            <li><Link className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors" to="/faq">FAQ</Link></li>
            <li><Link className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors" to="/shipping">Shipping</Link></li>
            <li><Link className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors" to="/returns">Returns</Link></li>
            <li><Link className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors" to="/care">Care Guides</Link></li>
          </ul>
        </div>
      </div>
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop pt-8 border-t border-surface-variant/50 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="font-caption text-caption text-on-surface-variant">© 2026 Pawpost Artisanal Pet Shop. All rights reserved.</p>
        <div className="flex space-x-6">
          <Link className="font-caption text-caption text-on-surface-variant hover:text-primary transition-colors" to="/privacy">Privacy Policy</Link>
          <Link className="font-caption text-caption text-on-surface-variant hover:text-primary transition-colors" to="/terms">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
