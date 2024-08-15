import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import HomeBody from "./routes/Home/HomeBody";
import Products from "./routes/Home/Products";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<HomeBody />} />
          <Route path="/home" element={<HomeBody />} />
          <Route path="/products" element={<Products />}>
          
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
