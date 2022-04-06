import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import store, { persistor } from "./store/store";
import './index.css'

// ** PrismJS
import "prismjs";
import "prismjs/themes/prism-tomorrow.css";
import "prismjs/components/prism-jsx.min";

// ** React Perfect Scrollbar
import "react-perfect-scrollbar/dist/css/styles.css";

// ** React Toastify
import "./@core/scss/react/libs/toastify/toastify.scss";

// ** Core styles
import "./@core/assets/fonts/feather/iconfont.css";
import "./@core/scss/core.scss";
import "./assets/scss/style.scss";
import { ThemeContext } from "./utility/context/ThemeColors";
import { Spinner } from "reactstrap";
import { ToastContainer } from "react-toastify";

// ** Lazy load app
const LazyApp = lazy(() => import("./App"));

ReactDOM.render(
  <Provider store={store}>
    <Suspense fallback={<Spinner />}>
      <ThemeContext>
        <PersistGate loading={null} persistor={persistor}>
          <LazyApp />
          <ToastContainer newestOnTop />
        </PersistGate>
      </ThemeContext>
    </Suspense>
  </Provider>,
  document.getElementById("root")
);
