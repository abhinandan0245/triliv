import Header from "./components/layout/Header/Header";
import NavIcons from "./components/layout/Header/NavIcons";
import FAQPage from "./pages/Policies/FAQs";
import SearchModal from "./components/ui/Modal/Search";
import Search from "./components/ui/Modal/Search";
import WishlistPage from "./components/ui/WishlistPage";
import AccountDetail from "./pages/Account/AcoountDetail";
import Addresses from "./pages/Account/Addresses";
import MyAccount from "./pages/Account/MyAccount";
import Orders from "./pages/Account/Orders";
import CheckoutPage from "./pages/Cart/Checkout/CheckoutPage";
import ContactPage from "./pages/Contact/ContactPage";
import Homepage from "./pages/Home/HomePage";
import AboutPage from "./pages/OurStory&AboutUs/AboutPage";
import PrivacyPolicy from "./pages/Policies/PrivacyPolicy";
import Shipping from "./pages/Policies/Shipping";
import Shop from "./pages/Shop/Shop";
import ReturnRefund from "./pages/Policies/ReturnRefund";
import TermsCondition from "./pages/Policies/TermsCondition";
import OrderSuccess from "./pages/System/ThankYou";
import CartTitle from "./pages/Cart/CartTitle";
import ShoppingCart from "./pages/Cart/ShoppingCart";
import YouMayAlsoLike from "./pages/Cart/YouMayAlsoLike";
import Cart from "./pages/Cart/CartPage";
import Breadcrumb from "./components/ProductDetails/Breadcrumb";
import MainDetail from "./components/ProductDetails/MainDetail";
import ProductDescription from "./components/ProductDetails/ProductDescription";
import RecentlyViewed from "./components/ProductDetails/RecentlyViewed";
import PeopleAlsoBought from "./components/ProductDetails/PeopleAlso";
function App() {
  return (
    <> 
      {/* <WishlistPage/>
       <FAQPage/>
      <PrivacyPolicy/> */}
      <div>
      <Homepage/>
      {/* <Header/> */}
      {/* <NavIcons/> */}
      {/* <Shop/> */}
      {/* <AboutPage/> */}
      {/* <ContactPage/> */}
      {/* <SearchModal/> */}
      {/* <MyAccount/> */}
      {/* <Addresses/> */}
      {/* <Orders/> */}
      {/* <AccountDetail/> */}
      {/* <CheckoutPage/> */}
      {/* <Shipping/> */}
      {/* <ReturnRefund/> */}
      {/* <TermsCondition/> */}
      {/* <OrderSuccess/> */}

      {/* <Cart/> */}

         {/* <CartTitle/>
      <ShoppingCart/>
      <YouMayAlsoLike/> */}


      {/* <Breadcrumb/> */}
   {/* <MainDetail/> */}
   {/* <ProductDescription/> */}
   {/* <PeopleAlsoBought/> */}
   {/* <RecentlyViewed/> */}
  
      </div>
    </>
  );
}

export default App;
