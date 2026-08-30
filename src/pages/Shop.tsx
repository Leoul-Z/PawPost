import { Link } from 'react-router-dom';
import { useStore } from '../context/StoreContext';

const Shop = () => {
  const { favorites, toggleFavorite, addToBasket } = useStore();

  const handleQuickAdd = (product: any) => {
    addToBasket({ ...product, quantity: 1 });
  };
  return (
    <main className="flex-1 w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-12">


      <div className="grid grid-cols-1 xl:grid-cols-4 gap-12">

        <aside className="xl:col-span-1">
          <div className="sticky top-28 space-y-8">
            <div>
              <h2 className="font-headline-md text-headline-md text-on-surface mb-4">Categories</h2>
              <ul className="space-y-3 font-body-md text-body-md">
                <li>
                  <Link className="text-primary font-bold hover:text-primary transition-colors flex justify-between items-center" to="/shop">
                    All Products
                    <span className="bg-surface-container px-2 py-0.5 rounded-full text-caption font-caption text-on-surface-variant">42</span>
                  </Link>
                </li>
                <li>
                  <Link className="text-on-surface-variant hover:text-primary transition-colors flex justify-between items-center" to="/accessories">
                    Collars &amp; Leads
                    <span className="bg-surface-container px-2 py-0.5 rounded-full text-caption font-caption text-on-surface-variant">18</span>
                  </Link>
                </li>
                <li>
                  <Link className="text-on-surface-variant hover:text-primary transition-colors flex justify-between items-center" to="/shop">
                    Ceramic Bowls
                    <span className="bg-surface-container px-2 py-0.5 rounded-full text-caption font-caption text-on-surface-variant">8</span>
                  </Link>
                </li>
                <li>
                  <Link className="text-on-surface-variant hover:text-primary transition-colors flex justify-between items-center" to="/shop">
                    Beds &amp; Blankets
                    <span className="bg-surface-container px-2 py-0.5 rounded-full text-caption font-caption text-on-surface-variant">6</span>
                  </Link>
                </li>
                <li>
                  <Link className="text-on-surface-variant hover:text-primary transition-colors flex justify-between items-center" to="/shop">
                    Toys &amp; Enrichment
                    <span className="bg-surface-container px-2 py-0.5 rounded-full text-caption font-caption text-on-surface-variant">10</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </aside>


        <div className="xl:col-span-3">
          <div className="flex justify-between items-center mb-8">
            <p className="font-body-md text-body-md text-on-surface-variant">Showing <span className="font-bold text-on-surface">1-12</span> of 42 products</p>
            <div className="flex items-center gap-4">
              <label className="hidden sm:block font-label-md text-label-md text-on-surface-variant" htmlFor="sort">Sort by</label>
              <div className="relative">
                <select className="appearance-none bg-surface-container-lowest border border-outline rounded-lg py-2 pl-4 pr-10 font-label-md text-label-md text-on-surface focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary" id="sort">
                  <option>Featured</option>
                  <option>New Arrivals</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-on-surface-variant">
                  <span className="material-symbols-outlined">expand_more</span>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12">

            <article className="group flex flex-col h-full">
              <div className="aspect-square rounded-2xl overflow-hidden bg-surface-container mb-4 relative soft-shadow border border-surface-variant">
                <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" data-alt="Heritage Woven Leash in Terracotta" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC_WMzZZp9Y93kjYiGt746A4vdWkxc29xYfj9r8gwXvkG8NAvTAN4xhTGD-Q_gsyMsTI5q6nivjvuob3srZZ7k7YIxolQ3nJlyCYUT0j9F0PrSjsiRJpetHPpe0tUuI5B-rtoMDso5S0av14Cd5uN19I5oroIzOQ-ZqQqp9W2AWAInpiI4X0u-RhSnsI6lTusfi7S0pS8ZVmHraAMeWHLghyrmPTH_fHrXRBQ1xDbDIKfVo0HpKg0b6" />
                <div className="absolute top-3 left-3 flex gap-2">
                  <span className="bg-primary/90 backdrop-blur-sm text-on-primary px-2 py-1 rounded font-label-md text-[10px] uppercase tracking-wider">Best Seller</span>
                </div>
                <button onClick={() => toggleFavorite(1)} aria-label="Add to favorites" className={`absolute top-3 right-3 w-8 h-8 backdrop-blur-sm rounded-full flex items-center justify-center transition-colors transform translate-y-2 group-hover:translate-y-0 duration-300 ${favorites[1] ? 'bg-surface text-primary opacity-100 translate-y-0' : 'bg-surface/80 text-on-surface-variant hover:text-primary opacity-0 group-hover:opacity-100'}`}>
                  <span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: `"'FILL' ${favorites[1] ? '1' : '0'}"` }}>favorite</span>
                </button>
              </div>
              <div className="flex-1 flex flex-col">
                <h3 className="font-headline-md text-[18px] text-on-surface group-hover:text-primary transition-colors mb-1">
                  <Link to="/product">Heritage Woven Leash</Link>
                </h3>
                <p className="font-caption text-caption text-on-surface-variant mb-3 flex-1">Hand-dyed cotton rope with solid brass hardware.</p>
                <div className="flex justify-between items-center mt-auto">
                  <span className="font-label-md text-label-md text-secondary">Br 48.00</span>
                  <button onClick={() => handleQuickAdd({
                    id: 1,
                    name: 'Heritage Woven Leash',
                    color: 'Terracotta & Sage',
                    size: 'Standard (5ft)',
                    price: 48,
                    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC_WMzZZp9Y93kjYiGt746A4vdWkxc29xYfj9r8gwXvkG8NAvTAN4xhTGD-Q_gsyMsTI5q6nivjvuob3srZZ7k7YIxolQ3nJlyCYUT0j9F0PrSjsiRJpetHPpe0tUuI5B-rtoMDso5S0av14Cd5uN19I5oroIzOQ-ZqQqp9W2AWAInpiI4X0u-RhSnsI6lTusfi7S0pS8ZVmHraAMeWHLghyrmPTH_fHrXRBQ1xDbDIKfVo0HpKg0b6'
                  })} aria-label="Add to cart" className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-on-surface hover:bg-primary hover:text-on-primary transition-colors shadow-sm">
                    <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: `"'FILL' 0"` }}>add_shopping_cart</span>
                  </button>
                </div>
              </div>
            </article>


            <article className="group flex flex-col h-full">
              <div className="aspect-square rounded-2xl overflow-hidden bg-surface-container mb-4 relative soft-shadow border border-surface-variant">
                <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" data-alt="Artisanal Ceramic Bowl" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC1KsgYqGUgQY-sRsfhv581Q0hSVUAEu4YRb7-txGIYd3CGzlnqW6AWwJVvRn5rlGYIShN2rYw7NFJ7k6VWj8u-eqkbfGV7JsHYyEscQCXmWHEPUZIxUK1uzUYEPSRcO0VEeJNIPs5YtxmNeeRlpbXXWERV3JT5avSKp_b4f8kEMmRv3ScmHJ__QvKRdGieoK14BtJGILZqNkTjUWxcpJ6XQV0Zs0Dd4GvLWK2mIeZYHzkWmvt2pGvS" />
                <button onClick={() => toggleFavorite(2)} aria-label="Add to favorites" className={`absolute top-3 right-3 w-8 h-8 backdrop-blur-sm rounded-full flex items-center justify-center transition-colors transform translate-y-2 group-hover:translate-y-0 duration-300 ${favorites[2] ? 'bg-surface text-primary opacity-100 translate-y-0' : 'bg-surface/80 text-on-surface-variant hover:text-primary opacity-0 group-hover:opacity-100'}`}>
                  <span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: `"'FILL' ${favorites[2] ? '1' : '0'}"` }}>favorite</span>
                </button>
              </div>
              <div className="flex-1 flex flex-col">
                <h3 className="font-headline-md text-[18px] text-on-surface group-hover:text-primary transition-colors mb-1">
                  <Link to="/product">Artisanal Ceramic Bowl</Link>
                </h3>
                <p className="font-caption text-caption text-on-surface-variant mb-3 flex-1">Heavyweight stoneware with a speckled glaze.</p>
                <div className="flex justify-between items-center mt-auto">
                  <span className="font-label-md text-label-md text-secondary">Br 32.00</span>
                  <button onClick={() => handleQuickAdd({
                    id: 2,
                    name: 'Artisanal Ceramic Bowl',
                    color: 'Speckled Cream',
                    size: 'Medium',
                    price: 32,
                    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC1KsgYqGUgQY-sRsfhv581Q0hSVUAEu4YRb7-txGIYd3CGzlnqW6AWwJVvRn5rlGYIShN2rYw7NFJ7k6VWj8u-eqkbfGV7JsHYyEscQCXmWHEPUZIxUK1uzUYEPSRcO0VEeJNIPs5YtxmNeeRlpbXXWERV3JT5avSKp_b4f8kEMmRv3ScmHJ__QvKRdGieoK14BtJGILZqNkTjUWxcpJ6XQV0Zs0Dd4GvLWK2mIeZYHzkWmvt2pGvS'
                  })} aria-label="Add to cart" className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-on-surface hover:bg-primary hover:text-on-primary transition-colors shadow-sm">
                    <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: `"'FILL' 0"` }}>add_shopping_cart</span>
                  </button>
                </div>
              </div>
            </article>


            <article className="group flex flex-col h-full">
              <div className="aspect-square rounded-2xl overflow-hidden bg-surface-container mb-4 relative soft-shadow border border-surface-variant">
                <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" data-alt="Natural Knot Toy" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDFk9vMvB3_N6rY7h-pT8_J8D3Q_Z5wZ_g6H6T4W5z7X8Q9c2V5B8N7M6_b4T6C9J3Y5wZ_g6H6T4W5z7X8Q9c2V5B8N7M6_b4T6C9J3Y5wZ_g6H6T4W5z7X8Q9c2V5B8N7M6_b4T6C9J3Y5" />
                <div className="absolute top-3 left-3 flex gap-2">
                  <span className="bg-surface/90 backdrop-blur-sm text-on-surface px-2 py-1 rounded font-label-md text-[10px] uppercase tracking-wider border border-outline-variant">New</span>
                </div>
                <button onClick={() => toggleFavorite(3)} aria-label="Add to favorites" className={`absolute top-3 right-3 w-8 h-8 backdrop-blur-sm rounded-full flex items-center justify-center transition-colors transform translate-y-2 group-hover:translate-y-0 duration-300 ${favorites[3] ? 'bg-surface text-primary opacity-100 translate-y-0' : 'bg-surface/80 text-on-surface-variant hover:text-primary opacity-0 group-hover:opacity-100'}`}>
                  <span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: `"'FILL' ${favorites[3] ? '1' : '0'}"` }}>favorite</span>
                </button>
              </div>
              <div className="flex-1 flex flex-col">
                <h3 className="font-headline-md text-[18px] text-on-surface group-hover:text-primary transition-colors mb-1">
                  <Link to="/product">Natural Knot Toy</Link>
                </h3>
                <p className="font-caption text-caption text-on-surface-variant mb-3 flex-1">Undyed, natural cotton rope for chewing and tugging.</p>
                <div className="flex justify-between items-center mt-auto">
                  <span className="font-label-md text-label-md text-secondary">Br 18.00</span>
                  <button onClick={() => handleQuickAdd({
                    id: 3,
                    name: 'Natural Knot Toy',
                    color: 'Natural',
                    size: 'One Size',
                    price: 18,
                    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDFk9vMvB3_N6rY7h-pT8_J8D3Q_Z5wZ_g6H6T4W5z7X8Q9c2V5B8N7M6_b4T6C9J3Y5wZ_g6H6T4W5z7X8Q9c2V5B8N7M6_b4T6C9J3Y5wZ_g6H6T4W5z7X8Q9c2V5B8N7M6_b4T6C9J3Y5'
                  })} aria-label="Add to cart" className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-on-surface hover:bg-primary hover:text-on-primary transition-colors shadow-sm">
                    <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: `"'FILL' 0"` }}>add_shopping_cart</span>
                  </button>
                </div>
              </div>
            </article>

          </div>

          <div className="mt-16 flex justify-center border-t border-surface-variant pt-8">
            <nav className="flex items-center gap-2" aria-label="Pagination">
              <button className="w-10 h-10 flex items-center justify-center rounded-full border border-outline-variant text-on-surface-variant hover:text-primary hover:border-primary transition-colors disabled:opacity-50 disabled:cursor-not-allowed" disabled type="button">
                <span className="material-symbols-outlined text-[20px]">chevron_left</span>
              </button>
              <button className="w-10 h-10 flex items-center justify-center rounded-full bg-primary text-on-primary font-label-md text-label-md" type="button">1</button>
              <button className="w-10 h-10 flex items-center justify-center rounded-full border border-outline-variant text-on-surface hover:border-primary hover:text-primary transition-colors font-label-md text-label-md" type="button">2</button>
              <button className="w-10 h-10 flex items-center justify-center rounded-full border border-outline-variant text-on-surface hover:border-primary hover:text-primary transition-colors font-label-md text-label-md" type="button">3</button>
              <span className="text-on-surface-variant font-label-md px-2">...</span>
              <button className="w-10 h-10 flex items-center justify-center rounded-full border border-outline-variant text-on-surface-variant hover:text-primary hover:border-primary transition-colors" type="button">
                <span className="material-symbols-outlined text-[20px]">chevron_right</span>
              </button>
            </nav>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Shop;
