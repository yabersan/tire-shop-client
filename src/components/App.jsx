import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import { isAuth } from "../features/authSlice";
import { addProducts } from "../features/cartSlice";
import Main from "../pages/Main/Main";
import "./App.css";
import Cart from "./Cart/Cart";
import Header from "./Header/Header";
import Login from "./Login/Login";
import Product from "./Product/Product";
import Promotion from "./Promotion/Promotion";
import TireStorage from "./Promotion/two/TireStorage";
import Shops from "./Shops/Shops";

function App() {
const dispatch = useDispatch()
const token = localStorage.getItem("token")
const auth = useSelector(state => state.authReducer.isAuth)


useEffect(() => {
if(auth){

dispatch(addProducts(JSON.parse(localStorage.getItem("cart"))))
}
dispatch(isAuth())


}, [auth]);
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/login" element={<Login />} />
          <Route index element={<Main />} />
          <Route path="/shops" element={<Shops />} />
          <Route path="/promotion" element={ <Promotion />} />
          <Route path="/promotion2" element={<TireStorage /> } />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/cart" element={<Cart/>} />

          <Route />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
