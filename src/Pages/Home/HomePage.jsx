import Footer from "../../components/layout/Footer/Footer.jsx";
import Header from "../../components/layout/Header/Header.jsx";
import BannerOne from "./Homesections/BannerOne.jsx";
import IconBox from "./Homesections/IconBox.jsx";
import FeaturedProducts from "./Homesections/FeaturedProducts.jsx";
import Slider from "./Homesections/Slider.jsx";
import BannerTwo from "./Homesections/BannerTwo.jsx";
import ShopNow from "./Homesections/ShopNow.jsx";
const Homepage = () => {
  return (
    <>
      <Slider />
      <IconBox />
      <BannerOne />
      <FeaturedProducts />
      <BannerTwo />
      <ShopNow />
    </>
  );
};

export default Homepage;
