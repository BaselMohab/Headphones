import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AppProvider } from './AppContexts/StoreContext';
import { AuthProvider } from './AppContexts/AuthContext';


// Components
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import SingleProductDetails from './components/ProductsDetails/SingleProductDetails';
import Signup from './components/AuthFiles/Signup';
import Login from './components/AuthFiles/Login';
import ForgetPass from './components/AuthFiles/ForgetPass';


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
        <AuthProvider>
        <ScrollRestoration />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" Component={Signup} />
          <Route path="/login" Component={Login} />
          <Route path="/forgetPass" Component={ForgetPass} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<SingleProductDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
        </AuthProvider>
      </Router>
    </AppProvider>
  );
}

export default App;