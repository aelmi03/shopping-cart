import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home/";
import Footer from "./components/Footer.js";
import Shop from "./components/Shop/Shop.js";
import ProductDisplay from "./components/ProductDisplay";
import Checkout from "./components/Checkout/Checkout";
import { useState } from "react";

function App() {
  const [cartProducts, setCartProducts] = useState([]);
  console.log(cartProducts);
  const deleteProduct = (productObject) => {
    setCartProducts(
      cartProducts.filter((product) => product.id !== productObject.id)
    );
  };
  const addProduct = (productObject, amount) => {
    setCartProducts([...cartProducts, { ...productObject, amount }]);
  };

  const changeProductAmount = (productObject, amount) => {
    setCartProducts(
      cartProducts.map((product) => {
        if (product.id === productObject.id) {
          return {
            ...product,
            amount,
          };
        }
        return product;
      })
    );
  };
  const editCartProduct = (productObject, amount) => {
    if (amount === 0) {
      deleteProduct(productObject);
    }
    if (!cartProducts.some((product) => product.id === productObject.id)) {
      addProduct(productObject, amount);
    } else {
      changeProductAmount(productObject, amount);
    }
  };
  const getAmountTotal = () => {
    return cartProducts.reduce((currentValue, prevProduct) => {
      return prevProduct.amount + currentValue;
    }, 0);
  };
  return (
    <Router>
      <Header cartAmount={getAmountTotal()} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/shop"
          element={
            <Shop
              editCartProduct={editCartProduct}
              cartProducts={cartProducts}
            />
          }
        />
        <Route
          path="/shop/:id"
          element={
            <ProductDisplay
              editCartProduct={editCartProduct}
              cartProducts={cartProducts}
            />
          }
        />
        <Route
          path="/checkout"
          element={<Checkout cartProducts={cartProducts} />}
        />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
