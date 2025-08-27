import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import "react-toastify/dist/ReactToastify.css";

import Homepage from "./pages/Home/HomePage";
import Footer from "./components/layout/Footer/Footer";
import Shop from "./pages/Shop/Shop";
import AboutPage from "./pages/OurStory&AboutUs/AboutPage";
import ContactPage from "./pages/Contact/ContactPage";
import Header from "./components/layout/Header/Header";
import WishlistPage from "./pages/Wishlist/WishlistPage"; 
import ProductDetail from "./pages/ProductDetails/ProductDetail";
import NotFoundPage from "./pages/System/NotFound";
import PrivacyPolicy from "./pages/Policies/PrivacyPolicy";
import TermsCondition from "./pages/Policies/TermsCondition";
import FAQPage from "./pages/Policies/FAQs";
import ReturnRefund from "./pages/Policies/ReturnRefund";
import Shipping from "./pages/Policies/Shipping";
import CheckoutPage from "./pages/Cart/CheckoutPage";
import Cart from "./pages/Cart/CartPage";
import MyAccount from "./pages/Account/MyAccount";
import Orders from "./pages/Account/Orders";
import Addresses from "./pages/Account/Addresses";
import AccountDetail from "./pages/Account/AcoountDetail";
import OrderSuccess from "./pages/System/ThankYou";
import ScrollTop from "./components/ui/Modal/ScrollTop";
import Toolbar from "./components/ui/Modal/Toolbar";
import { ToastContainer } from "react-toastify";
import PrivateRoute from "./components/PrivateRoute";

import useAutoLogout from "./hooks/useAutoLogout";
import ProductDetails from "./pages/ProductDetails/ProductDetails";

function App() {
  // auto logout with token expire 
  useAutoLogout();


  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
      mirror: false,
    });
  }, []);

  return (
    <div className="app">
      <ToastContainer position="top-right"
  autoClose={3000}
  hideProgressBar={false}
  newestOnTop={false}
  closeOnClick
  rtl={false}
  pauseOnFocusLoss
  draggable
  pauseOnHover />
      <Header />
      <ScrollTop />
      
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/shop/category/:categorySlug" element={<Shop />} />
          <Route path="/aboutus" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/wish-list" element={<WishlistPage />} />
          <Route path="/productdetail/:id" element={<ProductDetail />} />

          {/* <Route path="/productdetails" element={<ProductDetails />} /> */}
          <Route path="/privacypolicy" element={<PrivacyPolicy />} />
          <Route path="/term-condition" element={<TermsCondition />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/returnrefund" element={<ReturnRefund />} />
          <Route path="/shipping" element={<Shipping />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/myaccount" element={<PrivateRoute><MyAccount /></PrivateRoute>} />
          <Route path="/addresses" element={<PrivateRoute><Addresses /></PrivateRoute>} />
          <Route path="/orders" element={<PrivateRoute><Orders /></PrivateRoute>} />
          <Route path="/accountdetails" element={<PrivateRoute><AccountDetail /></PrivateRoute>} />
          <Route path="/thankyou/:id" element={<OrderSuccess />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>

      <Toolbar />
      <Footer />
    </div>
  );
}

export default App;
