import { useNavigate } from 'react-router-dom';
import { useStore } from '../context/StoreContext';

const Favorites = () => {
  const { favorites, toggleFavorite, addToBasket } = useStore();
  const navigate = useNavigate();

  // Mock data to resolve IDs to displayable items
  const mockCatalog: Record<string, any> = {
    'r1': { type: 'resident', name: 'Barnaby', desc: 'Golden Retriever Mix • Male', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCbJ5FfVhSZFmqh3FtwKyB0uh2-_RByTxtDs0x4EweKLCJag941iZhs5c41CJf356YP7nCC6mvEO04bWjxDOxFW_FJg_c5GYE_J_Cce-964pJPqoNFWnO_D0BuuSaGYlmxScD72dcL5SNSh2yg7UvKbPz4KQ2LMlGBzgLVNZNrkFUwl9evMeDmhh-Ch1AKYNIGLeyn3zLqHsL3f-w3qtkO4mdE9kEVcK59dxmZtsmcAkzjeNDSKRYcW' },
    'r2': { type: 'resident', name: 'Luna', desc: 'Domestic Shorthair (Calico) • Female', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCyCAJCKo8kpFTk4QlHGZrBizh5g0j1MCphsUG6XuF6IHp98Z1VuOYJ5P4rgI4DaR1RezjsBh4j4piXx5RGQ8RphRZLLFpaVQ9VLR9ZX_hepn9jKK_olQnrc7bd5gUVUKWDtL5b7g0_xsVnv_hE1xXFnsGb5hHghdd3On9FHncOlfq9u1qnlbwb2mjMHBO_8iD1rzSbqLsGYd8pxoThJgfDuapRfg_3vTTOfuJNNTDBy3Cw3aYTbfPd' },
    'r3': { type: 'resident', name: 'Pip & Pop', desc: 'Holland Lop Rabbits • Males', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBD-_7W6pg9cMi45YqpGmmhs69YZuTN__WdwOJcD3PC5lQTVMacZGWsAwTppzpfgPXW2J_3cLRmEWYpkegfGX_oMTViX5gd-3ZW6Zr0Kt2E4My2bdOwx7Hti91k3dvRcPqqz90_3tAzJLYtsnuO12DwZYwXlgXXqINFI3JXJJGuKBWb0FiTGs_WB_ZTfBd4WNLy6j1AY-B2-qKnbbxq1tUsjLVCk5oA2yWD1xB0lRIq79PUTg0qM9eN' },
    '1': { type: 'product', id: 1, name: 'Heritage Woven Leash', color: 'Terracotta & Sage', size: 'Standard (5ft)', price: 48, img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC_WMzZZp9Y93kjYiGt746A4vdWkxc29xYfj9r8gwXvkG8NAvTAN4xhTGD-Q_gsyMsTI5q6nivjvuob3srZZ7k7YIxolQ3nJlyCYUT0j9F0PrSjsiRJpetHPpe0tUuI5B-rtoMDso5S0av14Cd5uN19I5oroIzOQ-ZqQqp9W2AWAInpiI4X0u-RhSnsI6lTusfi7S0pS8ZVmHraAMeWHLghyrmPTH_fHrXRBQ1xDbDIKfVo0HpKg0b6' },
    '2': { type: 'product', id: 2, name: 'Artisanal Ceramic Bowl Set', color: 'Matte Cream', size: 'Medium (4 cups)', price: 65, img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC1KsgYqGUgQY-sRsfhv581Q0hSVUAEu4YRb7-txGIYd3CGzlnqW6AWwJVvRn5rlGYIShN2rYw7NFJ7k6VWj8u-eqkbfGV7JsHYyEscQCXmWHEPUZIxUK1uzUYEPSRcO0VEeJNIPs5YtxmNeeRlpbXXWERV3JT5avSKp_b4f8kEMmRv3ScmHJ__QvKRdGieoK14BtJGILZqNkTjUWxcpJ6XQV0Zs0Dd4GvLWK2mIeZYHzkWmvt2pGvS' },
    '3': { type: 'product', id: 3, name: 'Organic Sweet Potato Chews', color: 'Natural', size: '8 oz bag', price: 18, img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAs30NhCr0ihgMGpzIqi5DU0V-bmABuaaKTwi5uFuvtACBmU6T7HzIEZNkIt_f0iHjuZ5jY2ntv50iouN8_N8pqwrsJVO41r8-kHxA8nhawKQa9rTdPU8a2tblli_ATLwqUjvwfOSazGMAQYZsY_Ajd1zy37P9ggBLCmAy51pxvl5RPZ_jWay8yWuciolG9uwksYUkB_BsDQ8WuL9p7f9znvVFVdQTFRMd8Ju_SXmqXwLXq7NRCMY4-' },
  };

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
              const item = mockCatalog[id];
              if (!item) return null;

              return (
                <div key={id} className="bg-white rounded-xl border border-surface-variant p-4 flex gap-4 items-center soft-shadow relative group">
                  <button onClick={() => toggleFavorite(id)} className="absolute top-2 right-2 p-2 text-primary hover:text-secondary transition-colors z-10" aria-label="Remove from favorites">
                    <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: `"'FILL' 1"` }}>favorite</span>
                  </button>
                  <div className="w-24 h-24 rounded-lg overflow-hidden shrink-0 bg-surface-container cursor-pointer" onClick={() => navigate(item.type === 'product' ? '/product' : '/residents')}>
                    <img src={item.img} alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-headline-md text-[18px] text-on-surface mb-1 truncate cursor-pointer hover:text-primary transition-colors" onClick={() => navigate(item.type === 'product' ? '/product' : '/residents')}>
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
