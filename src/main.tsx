import ReactDOM from "react-dom/client";
import AppRouter from "@routes/AppRouter";
import { Provider } from "react-redux";
import { store } from "@store/store";
import "@styles/base.css";
import "./services/axios-global";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <AppRouter />
  </Provider>
);
