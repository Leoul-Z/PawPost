import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useStore } from '../context/StoreContext';

const ProductDetail = () => {
  const [quantity, setQuantity] = useState(1);
  const { favorites, toggleFavorite, addToBasket } = useStore();
  return (
    <main className="flex-1 max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">

        <div className="space-y-6">
          <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-surface-container-lowest soft-shadow border border-surface-variant relative group">
            <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" data-alt="A beautifully crafted, hand-woven cotton pet leash in muted earthy tones of terracotta and sage green, coiled elegantly on a textured stone surface. Next to it is a premium leather collar with brass hardware. The lighting is bright and directional, emphasizing the tactile textures of the materials. The overall aesthetic is high-end, minimal, and artisanal." src="https://lh3.googleusercontent.com/aida-public/AB6AXuC_WMzZZp9Y93kjYiGt746A4vdWkxc29xYfj9r8gwXvkG8NAvTAN4xhTGD-Q_gsyMsTI5q6nivjvuob3srZZ7k7YIxolQ3nJlyCYUT0j9F0PrSjsiRJpetHPpe0tUuI5B-rtoMDso5S0av14Cd5uN19I5oroIzOQ-ZqQqp9W2AWAInpiI4X0u-RhSnsI6lTusfi7S0pS8ZVmHraAMeWHLghyrmPTH_fHrXRBQ1xDbDIKfVo0HpKg0b6" />
            <div className="absolute top-4 left-4 bg-white/80 backdrop-blur-md px-3 py-1 rounded-full border border-white/40 shadow-sm">
              <span className="font-label-md text-[12px] text-primary uppercase tracking-wider font-bold">Best Seller</span>
            </div>
          </div>

          <div className="grid grid-cols-4 gap-4">
            <button className="aspect-square rounded-lg overflow-hidden border-2 border-primary ring-2 ring-primary/20 bg-surface-container">
              <img className="w-full h-full object-cover" data-alt="Close up of the brass hardware on the woven leash, showing high quality solid brass snap hook." src="https://lh3.googleusercontent.com/aida-public/AB6AXuB2vQxVn7P6G0QzT5-w9T6-J_O4A_q1Ff29S5T9Y0R-4wNq_Jt3Jb7E4-x581P9D8nZl9h4-vWc9aZ3A9q1A7A6K5B3L9Q9X1n5_n9C5P8T5w4C4S6v6_n_M4a_B9a4X9G0D_n9M5F5n4D8J_q8X2G8a6v5Y9B9n4Z_K7D0D8x1K5M9J9K9S6M0K4A8A6P_H8H_L0L4M6X5_M9_F6K_S6_w7C0_a8J1J2T8n8T9_" />
            </button>
            <button className="aspect-square rounded-lg overflow-hidden border border-outline-variant hover:border-primary transition-colors bg-surface-container opacity-70 hover:opacity-100">
              <img className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all" data-alt="Texture shot of the woven cotton material in terracotta." src="https://lh3.googleusercontent.com/aida-public/AB6AXuA2F9A9n7X8C5X1D_K9_J0V4G9M4A_S6n4D8A_V5S4T8Q1V8_n6_J5Z8V1V9V1M9D9D9T8C5n9B4Z8Q9T8P8J_q1T5A8_q9B9X5M8T0Z_Z5F8A5D_n5A0T8A4Z0V4J5B5P9D4D0Z1_a1n6V4V9A6J0D8Z_M9T5S_X5K0P0n5Q1J4A5Z4A4S1K_X5T9J9A4A_K9n9T9Z4D8J9_n6n9A4T1T1A9B9B0K4D_n4K4X1Z0K9" />
            </button>
            <button className="aspect-square rounded-lg overflow-hidden border border-outline-variant hover:border-primary transition-colors bg-surface-container opacity-70 hover:opacity-100 flex items-center justify-center">
              <span className="material-symbols-outlined text-on-surface-variant">play_circle</span>
            </button>
          </div>
        </div>

        <div className="flex flex-col pt-4 md:pt-10">

          <nav className="flex text-caption font-caption text-on-surface-variant mb-6" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-2">
              <li className="inline-flex items-center">
                <Link className="hover:text-primary transition-colors" to="/shop">Shop</Link>
              </li>
              <li>
                <span className="material-symbols-outlined text-[16px] mx-1">chevron_right</span>
              </li>
              <li className="inline-flex items-center">
                <Link className="hover:text-primary transition-colors" to="/accessories">Accessories</Link>
              </li>
              <li>
                <span className="material-symbols-outlined text-[16px] mx-1">chevron_right</span>
              </li>
              <li aria-current="page" className="text-on-surface">
                Heritage Woven Leash
              </li>
            </ol>
          </nav>

          <h1 className="font-display-lg text-headline-lg md:text-display-lg text-on-surface mb-2">Heritage Woven Leash</h1>
          <p className="font-headline-md text-headline-md text-secondary mb-6">Br 48.00</p>
          <div className="prose prose-stone prose-p:font-body-md prose-p:text-on-surface-variant mb-8">
            <p>Hand-dyed cotton rope with solid brass hardware. Durable enough for the trails, elegant enough for the city. Each piece is crafted by local artisans and built to age beautifully alongside your companion.</p>
          </div>

          <form className="space-y-8 mb-10" onSubmit={(e) => { 
            e.preventDefault(); 
            const formData = new FormData(e.currentTarget);
            const color = formData.get('color') as string;
            const size = formData.get('size') as string;
            addToBasket({
              id: 1, // Using 1 for this product
              name: 'Heritage Woven Leash',
              color: color === 'terracotta' ? 'Terracotta & Sage' : color === 'indigo' ? 'Indigo & Cream' : 'Charcoal & Grey',
              size: size === 'standard' ? 'Standard (5ft)' : 'Long (7ft)',
              price: 48,
              quantity: quantity,
              image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC_WMzZZp9Y93kjYiGt746A4vdWkxc29xYfj9r8gwXvkG8NAvTAN4xhTGD-Q_gsyMsTI5q6nivjvuob3srZZ7k7YIxolQ3nJlyCYUT0j9F0PrSjsiRJpetHPpe0tUuI5B-rtoMDso5S0av14Cd5uN19I5oroIzOQ-ZqQqp9W2AWAInpiI4X0u-RhSnsI6lTusfi7S0pS8ZVmHraAMeWHLghyrmPTH_fHrXRBQ1xDbDIKfVo0HpKg0b6'
            });
            // Optional: You could add a small visual toast/alert here if desired
          }}>

            <div>
              <h3 className="font-label-md text-label-md text-on-surface mb-3">Color: <span className="font-body-md text-on-surface-variant ml-2">Terracotta &amp; Sage</span></h3>
              <div className="flex space-x-3">
                <label className="relative cursor-pointer">
                  <input className="peer sr-only" name="color" type="radio" value="terracotta" defaultChecked />
                  <div className="w-12 h-12 rounded-full border-2 border-transparent peer-checked:border-primary peer-checked:ring-2 peer-checked:ring-primary/20 p-1 transition-all">
                    <div className="w-full h-full rounded-full" style={{ background: 'linear-gradient(135deg, #C97B84 50%, #8DA399 50%)' }}></div>
                  </div>
                </label>
                <label className="relative cursor-pointer">
                  <input className="peer sr-only" name="color" type="radio" value="indigo" />
                  <div className="w-12 h-12 rounded-full border-2 border-transparent peer-checked:border-primary peer-checked:ring-2 peer-checked:ring-primary/20 p-1 transition-all">
                    <div className="w-full h-full rounded-full" style={{ background: 'linear-gradient(135deg, #4A5D82 50%, #D4C5B9 50%)' }}></div>
                  </div>
                </label>
                <label className="relative cursor-pointer">
                  <input className="peer sr-only" name="color" type="radio" value="charcoal" />
                  <div className="w-12 h-12 rounded-full border-2 border-transparent peer-checked:border-primary peer-checked:ring-2 peer-checked:ring-primary/20 p-1 transition-all">
                    <div className="w-full h-full rounded-full" style={{ background: 'linear-gradient(135deg, #333333 50%, #999999 50%)' }}></div>
                  </div>
                </label>
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center mb-3">
                <h3 className="font-label-md text-label-md text-on-surface">Size</h3>
                <button className="text-caption font-caption text-secondary hover:text-primary underline underline-offset-2 transition-colors" type="button" onClick={() => alert('Size guide modal would open here.')}>Size Guide</button>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <label className="relative cursor-pointer">
                  <input className="peer sr-only" name="size" type="radio" value="standard" defaultChecked />
                  <div className="border border-outline-variant rounded-lg px-4 py-3 text-center peer-checked:bg-primary-container peer-checked:border-primary peer-checked:text-on-primary-container hover:border-primary transition-colors bg-surface-container-lowest">
                    <span className="font-label-md text-label-md block">Standard (5ft)</span>
                    <span className="font-caption text-caption text-on-surface-variant peer-checked:text-on-primary-container/80 mt-1 block">Best for everyday walks</span>
                  </div>
                </label>
                <label className="relative cursor-pointer">
                  <input className="peer sr-only" name="size" type="radio" value="long" />
                  <div className="border border-outline-variant rounded-lg px-4 py-3 text-center peer-checked:bg-primary-container peer-checked:border-primary peer-checked:text-on-primary-container hover:border-primary transition-colors bg-surface-container-lowest">
                    <span className="font-label-md text-label-md block">Long (7ft)</span>
                    <span className="font-caption text-caption text-on-surface-variant peer-checked:text-on-primary-container/80 mt-1 block">More room to explore</span>
                  </div>
                </label>
              </div>
            </div>

            <div className="flex space-x-4 pt-4 border-t border-surface-variant">

              <div className="flex items-center border border-outline rounded-lg bg-surface-container-lowest h-14">
                <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="px-4 text-on-surface-variant hover:text-primary transition-colors" type="button">
                  <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: `"'FILL' 0"` }}>remove</span>
                </button>
                <span className="w-8 text-center font-label-md text-label-md">{quantity}</span>
                <button onClick={() => setQuantity(quantity + 1)} className="px-4 text-on-surface-variant hover:text-primary transition-colors" type="button">
                  <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: `"'FILL' 0"` }}>add</span>
                </button>
              </div>

              <button className="flex-1 bg-primary text-on-primary rounded-lg font-label-md text-label-md h-14 flex items-center justify-center gap-2 hover:bg-on-primary-fixed-variant hover:shadow-md transition-all duration-300 transform active:scale-[0.98]" type="submit">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: `"'FILL' 0"` }}>shopping_basket</span>
                Add to Basket
              </button>

              <button onClick={() => toggleFavorite(1)} className={`w-14 h-14 border rounded-lg flex items-center justify-center transition-colors bg-surface-container-lowest ${favorites[1] ? 'text-primary border-primary bg-primary-container/10' : 'text-on-surface-variant border-outline hover:text-primary hover:border-primary'}`} type="button">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: `"'FILL' ${favorites[1] ? '1' : '0'}"` }}>favorite</span>
              </button>
            </div>
          </form>

          <div className="border-t border-surface-variant divide-y divide-surface-variant">
            <details className="group py-4" open>
              <summary className="flex justify-between items-center font-headline-md text-[18px] text-on-surface cursor-pointer list-none hover:text-primary transition-colors">
                <span>Materials &amp; Care</span>
                <span className="transition group-open:rotate-180">
                  <span className="material-symbols-outlined">expand_more</span>
                </span>
              </summary>
              <div className="text-body-md font-body-md text-on-surface-variant mt-4 leading-relaxed">
                <ul className="list-disc pl-5 space-y-2">
                  <li>100% natural, hand-spun cotton rope</li>
                  <li>Solid brass snap hook and O-ring (marine grade)</li>
                  <li>Hand wash with mild soap and warm water</li>
                  <li>Lay flat to dry out of direct sunlight</li>
                  <li>Brass will develop a natural patina over time; polish if desired.</li>
                </ul>
              </div>
            </details>
            <details className="group py-4">
              <summary className="flex justify-between items-center font-headline-md text-[18px] text-on-surface cursor-pointer list-none hover:text-primary transition-colors">
                <span>Shipping &amp; Returns</span>
                <span className="transition group-open:rotate-180">
                  <span className="material-symbols-outlined">expand_more</span>
                </span>
              </summary>
              <div className="text-body-md font-body-md text-on-surface-variant mt-4 leading-relaxed">
                <p>Free standard shipping on orders over Br 75. Due to the handcrafted nature of this item, please allow 2-3 business days for processing before shipment. Returns accepted within 30 days of delivery in unused condition.</p>
              </div>
            </details>
          </div>
        </div>
      </div>

      <div className="w-full flex justify-center py-16">
        <div className="h-px w-24 bg-surface-variant relative">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-background px-4">
            <span className="material-symbols-outlined text-outline-variant text-[16px]" style={{ fontVariationSettings: `"'FILL' 1"` }}>eco</span>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProductDetail;
