import React from "react";
import Header from "./Pages/Header/Header";
import NotFound from   "./Pages/NotFound";
import Footer from "./Pages/Footer/Footer";
import FAQs from "./Pages/Faq";
import AboutUs from "./Pages/AboutUs";
// import Index from "./Pages/Index/Index"
import CollectionsPage from "./Pages/Product/CollectionPage";
// import ProductPage from "./Pages/ProductDetails";
import Checkout from "./Pages/Checkout";

function App() {
  return (
     <>
         <Header />
         <NotFound/>
         {/* <Index /> */}
         <AboutUs/>
         <CollectionsPage />
         {/* <ProductPage/> */}
         <Checkout/>
         <FAQs/>
         <Footer />
      
    </>
  );
}

export default App;
