import { Link } from 'react-router-dom';
import { useStore } from '../context/StoreContext';
import { useState, useMemo } from 'react';

export const products = [
  { id: 1, name: 'Heritage Woven Leash', category: 'Accessories', price: 48, image: 'https://images.unsplash.com/photo-1737988007178-f36e7277ff66?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8SGVyaXRhZ2UlMjBXb3ZlbiUyMExlYXNoJTNBfGVufDB8fDB8fHww', isNew: true, desc: 'Hand-dyed cotton rope with solid brass hardware.' },
  { id: 2, name: 'Artisanal Ceramic Dog Bowl', category: 'Bowls', price: 32, image: 'https://images.unsplash.com/photo-1745828186636-8ad05b1ab7cd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fEFydGlzYW5hbCUyMENlcmFtaWMlMjBEb2clMjBCb3dsfGVufDB8fDB8fHww', desc: 'Heavyweight stoneware with a speckled glaze.' },
  { id: 3, name: 'Leather Dog Collar', category: 'Accessories', price: 42, image: 'https://plus.unsplash.com/premium_photo-1692392181661-96c4b34759db?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8TGVhdGhlciUyMERvZyUyMENvbGxhcnxlbnwwfHwwfHx8MA%3D%3D', desc: 'Premium leather with brass details.' },
  { id: 4, name: 'Orthopedic Dog Bed', category: 'Beds', price: 120, image: 'https://images.unsplash.com/photo-1492748046438-4b6d9ebe0c11?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8T3J0aG9wZWRpYyUyMERvZyUyMEJlZHxlbnwwfHwwfHx8MA%3D%3D', desc: 'Memory foam base for older dogs.' },
  { id: 5, name: 'Interactive Puzzle Toy', category: 'Toys', price: 25, image: 'https://images.unsplash.com/photo-1535294435445-d7249524ef2e?auto=format&fit=crop&w=800&q=80', desc: 'Keeps your dog mentally stimulated.' },
  { id: 6, name: 'Plush Squeaky Toy', category: 'Toys', price: 12, image: 'https://images.unsplash.com/photo-1568640347023-a616a30bc3bd?auto=format&fit=crop&w=800&q=80', desc: 'Soft and cuddly with a squeaker.' }
];

const ITEMS_PER_PAGE = 4;

const Shop = () => {
  const { favorites, toggleFavorite, addToBasket } = useStore();
  const [activeCategory, setActiveCategory] = useState('All');
  const [sortOption, setSortOption] = useState('Featured');
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['All', 'Accessories', 'Bowls', 'Beds', 'Toys'];

  const filteredAndSortedProducts = useMemo(() => {
    let result = products;

    if (searchQuery.trim() !== '') {
      const query = searchQuery.toLowerCase();
      result = result.filter(p => p.name.toLowerCase().includes(query) || p.desc.toLowerCase().includes(query) || p.category.toLowerCase().includes(query));
    }

    if (activeCategory !== 'All') {
      result = result.filter(p => p.category === activeCategory);
    }
    
    switch(sortOption) {
      case 'Price: Low to High':
        result = [...result].sort((a, b) => a.price - b.price);
        break;
      case 'Price: High to Low':
        result = [...result].sort((a, b) => b.price - a.price);
        break;
      case 'New Arrivals':
        result = [...result].sort((a, b) => (a.isNew === b.isNew ? 0 : a.isNew ? -1 : 1));
        break;
      default:
        break;
    }
    
    return result;
  }, [activeCategory, sortOption, searchQuery]);

  const totalPages = Math.ceil(filteredAndSortedProducts.length / ITEMS_PER_PAGE);
  const currentProducts = filteredAndSortedProducts.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);

  const handleQuickAdd = (product: any) => {
    addToBasket({ ...product, quantity: 1, color: 'Standard', size: 'One Size' });
  };

  return (
    <main className="flex-1 w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-12">
      <div className="grid grid-cols-1 xl:grid-cols-4 gap-12">

        <aside className="xl:col-span-1">
          <div className="sticky top-28 space-y-8">
            <div>
              <div className="relative mb-8">
                <input 
                  type="text" 
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => { setSearchQuery(e.target.value); setCurrentPage(1); }}
                  className="w-full bg-surface-container-lowest border border-outline rounded-xl py-3 pl-4 pr-10 font-body-md text-on-surface focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all shadow-sm"
                />
                <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-on-surface-variant pointer-events-none">search</span>
              </div>
              <h2 className="font-headline-md text-headline-md text-on-surface mb-4">Categories</h2>
              <ul className="space-y-3 font-body-md text-body-md">
                {categories.map(cat => {
                  const count = cat === 'All' ? products.length : products.filter(p => p.category === cat).length;
                  return (
                    <li key={cat}>
                      <button 
                        onClick={() => { setActiveCategory(cat); setCurrentPage(1); }}
                        className={`w-full flex justify-between items-center transition-colors ${activeCategory === cat ? 'text-primary font-bold' : 'text-on-surface-variant hover:text-primary'}`}
                      >
                        {cat === 'All' ? 'All Products' : cat}
                        <span className="bg-surface-container px-2 py-0.5 rounded-full text-caption font-caption text-on-surface-variant">{count}</span>
                      </button>
                    </li>
                  )
                })}
              </ul>
            </div>
          </div>
        </aside>

        <div className="xl:col-span-3">
          <div className="flex justify-between items-center mb-8">
            <p className="font-body-md text-body-md text-on-surface-variant">
              Showing <span className="font-bold text-on-surface">{(currentPage - 1) * ITEMS_PER_PAGE + 1}-{Math.min(currentPage * ITEMS_PER_PAGE, filteredAndSortedProducts.length)}</span> of {filteredAndSortedProducts.length} products
            </p>
            <div className="flex items-center gap-4">
              <label className="hidden sm:block font-label-md text-label-md text-on-surface-variant" htmlFor="sort">Sort by</label>
              <div className="relative">
                <select 
                  className="appearance-none bg-surface-container-lowest border border-outline rounded-lg py-2 pl-4 pr-10 font-label-md text-label-md text-on-surface focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary" 
                  id="sort"
                  value={sortOption}
                  onChange={(e) => { setSortOption(e.target.value); setCurrentPage(1); }}
                >
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
            {currentProducts.map(product => (
              <article key={product.id} className="group flex flex-col h-full">
                <div className="aspect-square rounded-2xl overflow-hidden bg-surface-container mb-4 relative soft-shadow border border-surface-variant">
                  <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt={product.name} src={product.image} />
                  {product.isNew && (
                    <div className="absolute top-3 left-3 flex gap-2">
                      <span className="bg-primary/90 backdrop-blur-sm text-on-primary px-2 py-1 rounded font-label-md text-[10px] uppercase tracking-wider">New</span>
                    </div>
                  )}
                  <button onClick={(e) => { e.preventDefault(); e.stopPropagation(); toggleFavorite(`product_${product.id}`); }} aria-label="Add to favorites" className={`absolute top-3 right-3 w-8 h-8 backdrop-blur-sm rounded-full flex items-center justify-center transition-colors transform translate-y-2 group-hover:translate-y-0 duration-300 ${favorites[`product_${product.id}`] ? 'bg-surface text-primary opacity-100 translate-y-0' : 'bg-surface/80 text-on-surface-variant hover:text-primary opacity-0 group-hover:opacity-100'}`}>
                    <span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: `"'FILL' ${favorites[`product_${product.id}`] ? '1' : '0'}"` }}>favorite</span>
                  </button>
                </div>
                <div className="flex-1 flex flex-col">
                  <h3 className="font-headline-md text-[18px] text-on-surface group-hover:text-primary transition-colors mb-1">
                    <Link to={`/product/${product.id}`}>{product.name}</Link>
                  </h3>
                  <p className="font-caption text-caption text-on-surface-variant mb-3 flex-1">{product.desc}</p>
                  <div className="flex justify-between items-center mt-auto">
                    <span className="font-label-md text-label-md text-secondary">Br {product.price.toFixed(2)}</span>
                    <button onClick={() => handleQuickAdd(product)} aria-label="Add to cart" className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-on-surface hover:bg-primary hover:text-on-primary transition-colors shadow-sm">
                      <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: `"'FILL' 0"` }}>add_shopping_cart</span>
                    </button>
                  </div>
                </div>
              </article>
            ))}
            
            {currentProducts.length === 0 && (
               <div className="col-span-full mt-10 text-center py-20 bg-surface-container rounded-2xl">
                 <h2 className="font-headline-md text-on-surface mb-2">No products found.</h2>
                 <p className="text-on-surface-variant">Try selecting a different category or clear filters.</p>
              </div>
            )}
          </div>

          {totalPages > 1 && (
            <div className="mt-16 flex justify-center border-t border-surface-variant pt-8">
              <nav className="flex items-center gap-2" aria-label="Pagination">
                <button 
                  onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                  className="w-10 h-10 flex items-center justify-center rounded-full border border-outline-variant text-on-surface-variant hover:text-primary hover:border-primary transition-colors disabled:opacity-50 disabled:cursor-not-allowed" 
                  disabled={currentPage === 1} 
                  type="button"
                >
                  <span className="material-symbols-outlined text-[20px]">chevron_left</span>
                </button>
                
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                  <button 
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={`w-10 h-10 flex items-center justify-center rounded-full font-label-md text-label-md transition-colors ${page === currentPage ? 'bg-primary text-on-primary' : 'border border-outline-variant text-on-surface hover:border-primary hover:text-primary'}`} 
                    type="button"
                  >
                    {page}
                  </button>
                ))}

                <button 
                  onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                  className="w-10 h-10 flex items-center justify-center rounded-full border border-outline-variant text-on-surface-variant hover:text-primary hover:border-primary transition-colors disabled:opacity-50 disabled:cursor-not-allowed" 
                  disabled={currentPage === totalPages}
                  type="button"
                >
                  <span className="material-symbols-outlined text-[20px]">chevron_right</span>
                </button>
              </nav>
            </div>
          )}
        </div>
      </div>
    </main>
  );
};

export default Shop;
