import { BrowserRouter, Routes, Route } from "react-router-dom";
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
import QuickAddModal from "./components/ui/Modal/QuickAdd";
import CheckoutPage from "./pages/Cart/CheckoutPage";
import Register from "./components/ui/Modal/Register";
import LoginPopup from "./components/ui/Modal/Login";
import Toolbar from "./components/ui/Modal/Toolbar"; 
import Cart from "./pages/Cart/CartPage";
import RegisterPopup from "./components/ui/Modal/Register";
import MyAccount from "./pages/Account/MyAccount";
import Orders from "./pages/Account/Orders";
import Addresses from "./pages/Account/Addresses";
import AccountDetail from "./pages/Account/AcoountDetail";

function App() {
  return (
  
      <div className="app">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/shop" element={<Shop/>} />
            <Route path="/aboutus" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/wish-list" element={<WishlistPage />} />
            <Route path="/productdetail" element={<ProductDetail />} />
            <Route path="/privacypolicy" element={<PrivacyPolicy />} />
            <Route path="/term-condition" element={<TermsCondition/>} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/returnrefund" element={<ReturnRefund />} />
            <Route path="/notfound" element={<NotFoundPage />} />
            <Route path="/shipping" element={< Shipping/>} />
            <Route path="/cart" element={<Cart/>} />
            
            
            <Route path="/" element={< QuickAddModal/>} />
            <Route path="/checkout" element={<CheckoutPage/>} />
            <Route path="/register" element={< RegisterPopup/>} />
            <Route path="/login" element={< LoginPopup/>} />
            <Route path="/myaccount" element={< MyAccount/>} />
            <Route path="/addresses" element={<Addresses/>} />
            <Route path="/orders" element={<Orders/>} />
            <Route path="/accountdetails" element={<AccountDetail/>} />


            
          </Routes>
        </main>
        <Toolbar/>
        <Footer />
      </div>

  );
}

export default App;