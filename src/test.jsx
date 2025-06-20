import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Pages/Header";
import './css/styles.css';
// import AccountPage from "./assets/Pages/AccountPages";
// import AccountAddress from "./assets/Pages/AccountAddress";
// import ReturnRefund from "./assets/Pages/ReturnAndRefund";
// import Shipping from "./assets/Pages/shipping";
// import TermsConditions from "./assets/Pages/TermAndCondition";
// import OrderSuccessPage from "./assets/Pages/ThankYou";
// import AboutUs from "./assets/Pages/AboutUs";
// import Header from "./assets/Pages/header";
// import Footer from "./assets/Pages/Footer/Footer";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        {/* <Route path="/" element={<Index />} /> */}
        <Route path="src\Pages\Header.jsx" element={<Header/>} />
        {/* <Route path="/AccountPages" element={<AccountPage />} />
        <Route path="/AccountAddress" element={<AccountAddress />} /> */}
        {/* <Route path="/AccountDetails" element={<AccountDetails />} /> */}
        {/* <Route path="/AccountOrders" element={<AccountOrders />} /> */}
        {/* <Route path="/Checkout" element={<Checkout />} /> */}
        {/* <Route path="/ContactUs" element={<ContactUs />} /> */}
        {/* <Route path="/Faq" element={<FAQs />} /> */}
        {/* <Route path="/PrivacyPolicy" element={<PrivacyPolics />} /> */}
        {/* <Route path="/Product" element={<Product />} /> */}
        {/* <Route path="/ProductDetails/:id" element={<ProductDetail />} /> */}
        {/* <Route path="/ReturnAndRefund" element={<ReturnRefund />} />
        <Route path="/shipping" element={<Shipping />} />
        <Route path="/TermAndCondition" element={<TermsConditions />} />
        <Route path="/ThankYou" element={<OrderSuccessPage />} /> */}
        {/* <Route path="/ViewCart" element={<ViewCart />} /> */}
        {/* <Route path="/WishList" element={<Wishlist />} /> */}
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
