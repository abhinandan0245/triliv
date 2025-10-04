



import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import App from "./App";
import { store } from "./app/store";

// ✅ jQuery global (before any jQuery plugin)
import $ from "jquery";
window.$ = $;
window.jQuery = $;

// (async () => {
//   await import("./assets/js/zoom.js");
// })();

// ✅ Bootstrap + Bootstrap Select from npm
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-select/dist/js/bootstrap-select.min.js";
import "bootstrap-select/dist/css/bootstrap-select.min.css";
import "jquery-validation";


//  Other CSS
import "bootstrap-icons/font/bootstrap-icons.css";
import "./assets/css/styles.css";
import "./assets/css/animate.css";
import "./assets/css/drift-basic.min.css";
import "./assets/css/font-icons.css";
import "./assets/css/fonts.css";
import "./assets/css/photoswipe.css";
import "./assets/css/swiper-bundle.min.css";
import 'swiper/swiper-bundle.css';
// import 'swiper/css';

// ✅ Local JS (excluding jquery & bootstrap-select)
// import "./assets/js/jquery-validate.js";
// import "./assets/js/wow.min.js";
// import "./assets/js/zoom.js";
// import "./assets/js/carousel.js";
import "./assets/js/count-down.js";
import "./assets/js/drift.min.js";
import "./assets/js/lazysize.min.js";
import "./assets/js/main.js";
import "./assets/js/multiple-modal.js";
import "./assets/js/nouislider.min.js";
import "./assets/js/photoswipe-lightbox.umd.min.js";
import "./assets/js/photoswipe.umd.min.js";
// import "./assets/js/shop.js";
// import "./assets/js/swiper-bundle.min.js";

// ✅ Init WOW
// if (typeof window.WOW === "function") {
//   new window.WOW().init();
// }
// import WOW from "wowjs";
// new WOW.WOW().init();

// ✅ Render App
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
