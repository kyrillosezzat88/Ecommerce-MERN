import ReactDOM from "react-dom/client";
import AppRouter from "@routes/AppRouter";
import { Provider } from "react-redux";
import { store } from "@store/store";
import "@styles/base.css";
import "./services/axios-global";
import { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <ToastContainer />
    <SkeletonTheme baseColor="#ddd" highlightColor="#eee">
      <AppRouter />
    </SkeletonTheme>
  </Provider>
);
