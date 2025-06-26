
import Footer from "./components/layout/Footer/Footer.jsx";
import Header from "./components/layout/Header/Header.jsx";
import BannerOne from "./components/sections/BannerOne.jsx";
import IconBox from "./components/sections/IconBox.jsx";
import FeaturedProducts from "./components/sections/FeaturedProducts.jsx";
import Slider from "./components/sections/Slider.jsx";
import BannerTwo from "./components/sections/BannerTwo.jsx";
import ShopNow from "./components/sections/ShopNow.jsx";
import Testimonials from "./components/sections/Testimonials.jsx";
import LatestTips from "./components/sections/LatestTips.jsx";
import ShopGram from "./components/sections/ShopGram.jsx";
const Homepage = () => {
  return (
   <>

   <Header/>
   <Slider/>
      <IconBox/>
      <BannerOne/>
      <FeaturedProducts/>
      <BannerTwo/>
      <ShopNow/>
      <Testimonials/>
      <LatestTips/>
      <ShopGram/>
   <Footer/>
   </>
  );
};

export default Homepage;
