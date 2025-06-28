import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Home/HomePage";
import Footer from "./components/layout/Footer/Footer";
import Shop from "./pages/Shop/Shop";
import AboutPage from "./pages/OurStory&AboutUs/AboutPage";
import ContactPage from "./pages/Contact/ContactPage";
import Header from "./components/layout/Header/Header";
import WishlistPage from "./pages/Wishlist/WishlistPage"; 


function App() {
  return (
  
      <div className="app">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/shop" element={<Shop/>} />
            <Route path="/about-us" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/wish-list" element={<WishlistPage />} />
         
          </Routes>
        </main>
        <Footer />
      </div>

  );
}

export default App;