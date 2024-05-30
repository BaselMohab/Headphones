import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

import { AppProvider } from './StoreContext & StoreReducer/StoreContext';

// Components
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import SingleProductDetails from './components/ProductsDetails/SingleProductDetails';


// Pages
import Home from './pages/Home'
import Products from "./pages/Products"
import Cart from "./pages/Cart"
import About from "./pages/About"
import Contact from "./pages/Contact"

function ScrollRestoration() {
  const { pathname } = useLocation();


  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <AppProvider>
      <Router>
        <ScrollRestoration />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<SingleProductDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </AppProvider>
  );
}

export default App;