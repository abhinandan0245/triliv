
import Footer from "../../components/layout/Footer/Footer.jsx";
import Header from "../../components/layout/Header/Header.jsx";
import BannerOne from "../../components/Homesections/BannerOne.jsx";
import IconBox from "../../components/Homesections/IconBox.jsx";
import FeaturedProducts from "../../components/Homesections/FeaturedProducts.jsx";
import Slider from "../../components/Homesections/Slider.jsx";
import BannerTwo from "../../components/Homesections/BannerTwo.jsx";
import ShopNow from "../../components/Homesections/ShopNow.jsx";
import Testimonials from "../../components/Homesections/Testimonials.jsx";
import LatestTips from "../../components/Homesections/LatestTips.jsx";
import ShopGram from "../../components/Homesections/ShopGram.jsx";
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
