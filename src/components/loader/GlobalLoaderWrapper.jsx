import { useSelector } from "react-redux";
import Loader from "../loader/Loader";

const GlobalLoaderWrapper = () => {
  const authFetching = useSelector((state) => state.authApi?.isFetching);
  const cartFetching = useSelector((state) => state.cartApi?.isFetching);
  const orderFetching = useSelector((state) => state.orderApi?.isFetching);
  const categoryFetching = useSelector((state) => state.categoryApi?.isFetching);
  const aboutusFetching = useSelector((state) => state.aboutusApi?.isFetching);
  const contactusFetching = useSelector((state) => state.contactusApi?.isFetching);
  const couponFetching = useSelector((state) => state.couponApi?.isFetching);
  const faqFetching = useSelector((state) => state.faqApi?.isFetching);
  const homepageFetching = useSelector((state) => state.homepageApi?.isFetching);
  const paymentFetching = useSelector((state) => state.paymentApi?.isFetching);
  const privacyPolicyFetching = useSelector((state) => state.privacyPolicyApi?.isFetching);
  const productsFetching = useSelector((state) => state.productApi?.isFetching);
  const refundPolicyFetching = useSelector((state) => state.refundPolicyApi?.isFetching);
  const shippingFetching = useSelector((state) => state.shippingInfoApi?.isFetching);
  const termscondFetching = useSelector((state) => state.termscondApi?.isFetching);
  const wishlistFetching = useSelector((state) => state.wishlistApi?.isFetching);
  const resetPassFetching = useSelector((state) => state.resetPassApi?.isFetching);

  const isFetching =
    authFetching +
    cartFetching +
    orderFetching +
    categoryFetching +
    aboutusFetching +
    contactusFetching +
    couponFetching +
    faqFetching +
    homepageFetching +
    paymentFetching +
    privacyPolicyFetching +
    productsFetching +
    refundPolicyFetching +
    shippingFetching +
    termscondFetching +
    wishlistFetching +
    resetPassFetching;

  return <Loader show={isFetching > 0} />;
};

export default GlobalLoaderWrapper;
