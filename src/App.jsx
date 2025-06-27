import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/layout/Header/Header";
import Homepage from "./pages/Home/HomePage";
import Footer from "./components/layout/Footer/Footer";
import Product from "./pages/Shop/Product";
import MobileMenu from "./components/ui/Modal/MobileMenu";

function App() {
  return (
    <>
      <div>
        {/* <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/product" element={<Product />} />
        </Routes>
       */}
         <Header/>
         <Homepage/>
         <Footer />
      </div>
    </>
  );
}
export default App;
