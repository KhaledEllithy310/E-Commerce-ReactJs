import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import ProductList from "./components/ProductsList/ProductList";
import ProductDetails from "./components/ProductsList/ProductDetails/ProductDetails";
import AddProduct from "./components/AddProduct/AddProduct";
import Register from "./components/Register/Register";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="/products/add" element={<AddProduct />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
}

export default App;
