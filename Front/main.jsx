import ReactDOM, { createRoot } from "react-dom/client";
import "./pindex.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Nav } from "./src/nav";
import store from "./src/Redux/Store";
import { Provider } from "react-redux";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <Nav />
  </Provider>
);
