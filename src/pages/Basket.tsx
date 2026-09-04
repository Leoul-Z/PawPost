import { Link } from 'react-router-dom';
import { useStore } from '../context/StoreContext';

const Basket = () => {
  const { basketItems: items, updateQuantity, removeItem } = useStore();

  const subtotal = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return (
    <main className="flex-1 max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-12 w-full">
      <div className="flex items-end justify-between border-b border-surface-variant pb-6 mb-8">
        <Link className="hidden md:flex font-label-md text-label-md text-secondary hover:text-primary transition-colors items-center gap-1" to="/shop">
          <span className="material-symbols-outlined text-[18px]">arrow_back</span>
          Continue Exploring
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

        <div className="lg:col-span-8">
          {items.length === 0 ? (
            <div className="py-12 text-center">
              <p className="font-body-lg text-on-surface-variant mb-6">Your basket is currently empty.</p>
              <Link to="/shop" className="inline-flex bg-primary text-on-primary font-label-md px-6 py-3 rounded-lg hover:bg-on-primary-fixed-variant transition-colors">
                Start Shopping
              </Link>
            </div>
          ) : (
            items.map(item => (
              <div key={item.id} className="flex flex-col sm:flex-row gap-6 py-8 border-b border-surface-variant">

                <div className="w-full sm:w-32 md:w-40 aspect-square rounded-xl overflow-hidden bg-surface-container shrink-0 border border-surface-variant">
                  <img className="w-full h-full object-cover" data-alt={item.name} src={item.image} />
                </div>

                <div className="flex-1 flex flex-col justify-between">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-headline-md text-[20px] text-on-surface mb-1">
                        <Link className="hover:text-primary transition-colors" to={`/product/${item.id}`}>{item.name}</Link>
                      </h3>
                      <ul className="font-body-md text-body-md text-on-surface-variant space-y-1">
                        <li>Color: <span className="text-on-surface">{item.color}</span></li>
                        <li>Size: <span className="text-on-surface">{item.size}</span></li>
                      </ul>
                    </div>
                    <p className="font-headline-md text-[20px] text-on-surface">Br {item.price.toFixed(2)}</p>
                  </div>
                  <div className="flex justify-between items-end mt-6">

                    <div className="flex items-center border border-outline-variant rounded-md bg-surface-container-lowest h-10 w-32">
                      <button onClick={() => updateQuantity(item.id, -1)} className="flex-1 text-on-surface-variant hover:text-primary transition-colors flex items-center justify-center" aria-label="Decrease quantity" type="button">
                        <span className="material-symbols-outlined text-[18px]">remove</span>
                      </button>
                      <span className="font-label-md text-label-md w-8 text-center">{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.id, 1)} className="flex-1 text-on-surface-variant hover:text-primary transition-colors flex items-center justify-center" aria-label="Increase quantity" type="button">
                        <span className="material-symbols-outlined text-[18px]">add</span>
                      </button>
                    </div>

                    <button onClick={() => removeItem(item.id)} className="font-label-md text-label-md text-on-surface-variant hover:text-error transition-colors flex items-center gap-1 underline underline-offset-4 decoration-outline-variant hover:decoration-error/50" type="button">
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
          <div className="mt-8">
            <Link className="md:hidden font-label-md text-label-md text-secondary hover:text-primary transition-colors flex items-center gap-1" to="/shop">
              <span className="material-symbols-outlined text-[18px]">arrow_back</span>
              Continue Exploring
            </Link>
          </div>
        </div>


        <div className="lg:col-span-4">
          <div className="bg-surface-container border border-surface-variant rounded-2xl p-6 md:p-8 sticky top-28 soft-shadow">
            <h2 className="font-headline-md text-[24px] text-on-surface mb-6 border-b border-outline-variant/30 pb-4">Order Summary</h2>
            <dl className="space-y-4 mb-6 font-body-md text-body-md">
              <div className="flex justify-between text-on-surface-variant">
                <dt>Subtotal</dt>
                <dd className="font-medium text-on-surface">Br {subtotal.toFixed(2)}</dd>
              </div>
              <div className="flex justify-between text-on-surface-variant">
                <dt>Shipping</dt>
                <dd className="text-secondary italic">Calculated at checkout</dd>
              </div>
              <div className="flex justify-between text-on-surface-variant">
                <dt>Taxes</dt>
                <dd className="text-secondary italic">Calculated at checkout</dd>
              </div>
            </dl>

            <div className="border-t border-outline-variant/30 pt-4 mb-8">
              <div className="flex justify-between items-baseline">
                <dt className="font-headline-md text-[20px] text-on-surface">Total</dt>
                <dd className="font-headline-lg text-[28px] text-primary">Br {subtotal.toFixed(2)}</dd>
              </div>
              <p className="font-caption text-caption text-on-surface-variant mt-2 text-right">ETB, incl. VAT if applicable</p>
            </div>

            <button onClick={() => alert('Secure checkout initiated!')} className="w-full bg-primary text-on-primary font-label-md text-label-md py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-on-primary-fixed-variant hover:shadow-lg transition-all duration-300 transform active:scale-[0.98] mb-4" type="button" disabled={items.length === 0}>
              <span className="material-symbols-outlined" style={{ fontVariationSettings: `"'FILL' 0"` }}>lock</span>
              Secure Checkout
            </button>

          
          </div>
        </div>
      </div>
    </main>
  );
};

export default Basket;
