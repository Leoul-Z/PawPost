import { useNavigate } from 'react-router-dom';
import { useStore } from '../context/StoreContext';
import { residentsData } from './Residents';
import { products } from './Shop';

const Favorites = () => {
  const { favorites, toggleFavorite, addToBasket } = useStore();
  const navigate = useNavigate();

  const catalog = Object.fromEntries([
    ...residentsData.map(r => [`resident_${r.id}`, { type: 'resident', id: r.id, name: r.name, desc: `${r.breed} • ${r.gender}`, img: r.image }]),
    ...products.map(p => [`product_${p.id}`, { type: 'product', id: p.id, name: p.name, color: p.category, size: 'One Size', price: p.price, img: p.image }])
  ]);

  const favoriteIds = Object.keys(favorites).filter(id => favorites[id]);

  return (
    <main className="flex-1 bg-surface-container-lowest min-h-screen pb-20">
      <div className="max-w-4xl mx-auto px-margin-mobile md:px-margin-desktop pt-12">
        <h1 className="font-display-lg text-[40px] text-on-surface mb-2">Your Favorites</h1>
        <p className="font-body-md text-on-surface-variant mb-12">Items and companions you've saved for later.</p>

        {favoriteIds.length === 0 ? (
          <div className="text-center py-20 bg-surface-container rounded-2xl border border-outline-variant/30 border-dashed">
            <span className="material-symbols-outlined text-[48px] text-outline mb-4" style={{ fontVariationSettings: `"'FILL' 0"` }}>favorite_border</span>
            <h2 className="font-headline-md text-on-surface mb-2">No favorites yet</h2>
            <p className="font-body-md text-on-surface-variant mb-6 max-w-md mx-auto">
              You haven't saved any items or companions yet. Browse our shop or residents and click the heart icon to save them here.
            </p>
            <div className="flex justify-center gap-4">
              <button onClick={() => navigate('/shop')} className="bg-primary text-on-primary font-label-md px-6 py-3 rounded-full hover:bg-primary-container hover:text-on-primary-container transition-colors">
                Explore Shop
              </button>
              <button onClick={() => navigate('/residents')} className="bg-surface-container border border-outline text-on-surface font-label-md px-6 py-3 rounded-full hover:bg-surface-container-highest transition-colors">
                Meet Residents
              </button>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {favoriteIds.map(id => {
              const item = catalog[id];
              if (!item) return null;

              return (
                <div key={id} className="bg-white rounded-xl border border-surface-variant p-4 flex gap-4 items-center soft-shadow relative group">
                  <button onClick={() => toggleFavorite(id)} className="absolute top-2 right-2 p-2 text-primary hover:text-secondary transition-colors z-10" aria-label="Remove from favorites">
                    <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: `"'FILL' 1"` }}>favorite</span>
                  </button>
                  <div className="w-24 h-24 rounded-lg overflow-hidden shrink-0 bg-surface-container cursor-pointer" onClick={() => navigate(item.type === 'product' ? `/product/${item.id}` : `/resident/${item.id}`)}>
                    <img src={item.img} alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-headline-md text-[18px] text-on-surface mb-1 truncate cursor-pointer hover:text-primary transition-colors" onClick={() => navigate(item.type === 'product' ? `/product/${item.id}` : `/resident/${item.id}`)}>
                      {item.name}
                    </h3>
                    <p className="font-caption text-caption text-on-surface-variant mb-2 truncate">
                      {item.desc || item.color}
                    </p>
                    {item.type === 'product' ? (
                      <div className="flex items-center justify-between mt-2">
                        <span className="font-label-md text-secondary">Br {item.price.toFixed(2)}</span>
                        <button onClick={() => addToBasket({
                          id: item.id,
                          name: item.name,
                          color: item.color,
                          size: item.size,
                          price: item.price,
                          quantity: 1,
                          image: item.img
                        })} className="text-primary hover:text-primary-container text-sm font-label-md flex items-center gap-1 transition-colors">
                          <span className="material-symbols-outlined text-[16px]">add_shopping_cart</span>
                          Add
                        </button>
                      </div>
                    ) : (
                      <div className="flex items-center justify-between mt-2">
                        <span className="font-caption text-primary bg-primary/10 px-2 py-1 rounded">Companion</span>
                        <button onClick={() => navigate('/residents')} className="text-primary hover:text-primary-container text-sm font-label-md transition-colors">
                          View Profile
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </main>
  );
};

export default Favorites;
