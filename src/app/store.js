import { configureStore } from '@reduxjs/toolkit';
import { authApi } from '../services/auth/authApi';
import { categoryApi } from '../services/category/categoryApi';
import authReducer from '../redux/slice/authSlice';
import { resetPasswordApi } from '../services/resetPassApi';
import { whyShopApi } from '../services/homepage/whyShopApi';
import { banner2Api } from '../services/homepage/banner2Api';
import { banner3Api } from '../services/homepage/banner3Api';
import { sliderApi } from '../services/homepage/sliderApi';
import { productApi } from '../services/products/productApi';
import { cartApi } from '../services/cart/cartApi';
import { wishlistApi } from '../services/wishlist/wishlistApi';
import { privacyPolicyApi } from '../services/privacypolicy/privacyPolicyApi';
import { shippingInfoApi} from '../services/shippinginfo/shippingInfoApi';
import { termscondApi } from '../services/termscond/termscondApi';
import { orderApi } from '../services/order/orderApi';
import { ccavenueApi } from '../services/payment/ccavenueApi';
import { faqApi } from '../services/faq/faqApi';
import { contactMessageApi } from '../services/contactmessage/contactMessageApi';
import { contactusApi } from '../services/contact/contactusApi';
import { refundPolicyApi } from '../services/refundpolicy/refundpolicyApi';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    [authApi.reducerPath]: authApi.reducer,
    [categoryApi.reducerPath]: categoryApi.reducer,
    [resetPasswordApi.reducerPath]: resetPasswordApi.reducer,
    [whyShopApi.reducerPath]: whyShopApi.reducer,
    [banner2Api.reducerPath]: banner2Api.reducer,
    [banner2Api.reducerPath]: banner2Api.reducer,
    [banner3Api.reducerPath]: banner3Api.reducer,
    [sliderApi.reducerPath]: sliderApi.reducer,
    [productApi.reducerPath]: productApi.reducer,
    [cartApi.reducerPath]: cartApi.reducer,
    [wishlistApi.reducerPath]: wishlistApi.reducer,
    [privacyPolicyApi.reducerPath]: privacyPolicyApi.reducer,
    [refundPolicyApi.reducerPath]: refundPolicyApi.reducer,
    [termscondApi.reducerPath]: termscondApi.reducer,
    [orderApi.reducerPath]: orderApi.reducer,
    [ccavenueApi.reducerPath]: ccavenueApi.reducer,
    [faqApi.reducerPath]: faqApi.reducer,
    [contactMessageApi.reducerPath]: contactMessageApi.reducer,
    [contactusApi.reducerPath]: contactusApi.reducer,
    [shippingInfoApi.reducerPath]: shippingInfoApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware, categoryApi.middleware , resetPasswordApi.middleware , whyShopApi.middleware , banner2Api.middleware , banner3Api.middleware , sliderApi.middleware , productApi.middleware , cartApi.middleware , wishlistApi.middleware , privacyPolicyApi.middleware , refundPolicyApi.middleware , termscondApi.middleware , orderApi.middleware , ccavenueApi.middleware , faqApi.middleware , contactusApi.middleware, contactMessageApi.middleware , shippingInfoApi.middleware), // FIXED HERE
});
