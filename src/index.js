import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout"
import Home from "./pages/Home"
import Gift from "./pages/gift"
import Store from "./pages/store"
import Pay from "./pages/pay"
import Order from "./pages/order"
import NoPage from "./pages/nopage"
export default function Pages() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="gift" element={<Gift />} />
          <Route path="pay" element={<Pay />} />
          <Route path="store" element={<Store />} />
          <Route path="order" element={<Order />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
