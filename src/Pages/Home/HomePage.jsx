
import Footer from "../../components/layout/Footer/Footer.jsx";
import Header from "../../components/layout/Header/Header.jsx";
import BannerOne from "./Homesections/BannerOne.js";
import IconBox from "./Homesections/IconBox.js";
import FeaturedProducts from "./Homesections/FeaturedProducts.js";
import Slider from "./Homesections/Slider.js";
import BannerTwo from "./Homesections/BannerTwo.js";
import ShopNow from "./Homesections/ShopNow.js";
import Testimonials from "./Homesections/Testimonials.js";
import LatestTips from "./Homesections/LatestTips.js";
import ShopGram from "./Homesections/ShopGram.jsx";
const Homepage = () => {
  return (
   <>

   {/* <Header/> */}
   <Slider/>
      <IconBox/>
      <BannerOne/>
      <FeaturedProducts/>
      <BannerTwo/>
      <ShopNow/>
      <Testimonials/>
      <LatestTips/>
      <ShopGram/>
   {/* <Footer/> */}
   </>
  );
};

export default Homepage;
