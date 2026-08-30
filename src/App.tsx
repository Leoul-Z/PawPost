import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Residents from './pages/Residents';
import ResidentDetail from './pages/ResidentDetail';
import ProductDetail from './pages/ProductDetail';
import Basket from './pages/Basket';
import OurStory from './pages/OurStory';
import VisitUs from './pages/VisitUs';
import Join from './pages/Join';
import Login from './pages/Login';
import Favorites from './pages/Favorites';
import { StoreProvider } from './context/StoreContext';

function App() {
  return (
    <StoreProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="shop" element={<Shop />} />
            <Route path="residents" element={<Residents />} />
            <Route path="resident/:id" element={<ResidentDetail />} />
            <Route path="product" element={<ProductDetail />} />
            <Route path="basket" element={<Basket />} />
            <Route path="story" element={<OurStory />} />
            <Route path="visit" element={<VisitUs />} />
            <Route path="join" element={<Join />} />
            <Route path="login" element={<Login />} />
            <Route path="favorites" element={<Favorites />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </StoreProvider>
  );
}

export default App;
