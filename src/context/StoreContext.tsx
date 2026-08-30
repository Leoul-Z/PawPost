import { createContext, useContext, useState, type ReactNode } from 'react';

export interface BasketItem {
  id: number;
  name: string;
  color: string;
  size: string;
  price: number;
  quantity: number;
  image: string;
}

interface StoreContextType {
  basketItems: BasketItem[];
  addToBasket: (item: BasketItem) => void;
  updateQuantity: (id: number, delta: number) => void;
  removeItem: (id: number) => void;
  favorites: Record<string | number, boolean>;
  toggleFavorite: (id: string | number) => void;
}

const StoreContext = createContext<StoreContextType | undefined>(undefined);

export const StoreProvider = ({ children }: { children: ReactNode }) => {
  const [basketItems, setBasketItems] = useState<BasketItem[]>([]);
  const [favorites, setFavorites] = useState<Record<string | number, boolean>>({});

  const addToBasket = (item: BasketItem) => {
    setBasketItems(prev => {
      const existing = prev.find(i => i.id === item.id);
      if (existing) {
        return prev.map(i => i.id === item.id ? { ...i, quantity: i.quantity + item.quantity } : i);
      }
      return [...prev, item];
    });
  };

  const updateQuantity = (id: number, delta: number) => {
    setBasketItems(prev => prev.map(item => {
      if (item.id === id) {
        return { ...item, quantity: Math.max(1, item.quantity + delta) };
      }
      return item;
    }));
  };

  const removeItem = (id: number) => {
    setBasketItems(prev => prev.filter(item => item.id !== id));
  };

  const toggleFavorite = (id: string | number) => {
    setFavorites(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <StoreContext.Provider value={{
      basketItems,
      addToBasket,
      updateQuantity,
      removeItem,
      favorites,
      toggleFavorite
    }}>
      {children}
    </StoreContext.Provider>
  );
};

export const useStore = () => {
  const context = useContext(StoreContext);
  if (context === undefined) {
    throw new Error('useStore must be used within a StoreProvider');
  }
  return context;
};
