import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home/";
import Footer from "./components/Footer.js";
import Shop from "./components/Shop/Shop.js";
import ProductDisplay from "./components/ProductDisplay";
import Checkout from "./components/Checkout/Checkout";
import { useState } from "react";

function App() {
  let [cartProducts, setCartProducts] = useState([]);
  const deleteProduct = (productObject) => {
    setCartProducts((prevProducts) => {
      return prevProducts.filter((product) => product.id !== productObject.id);
    });
  };
  const addProduct = (productObject, amount) => {
    setCartProducts([...cartProducts, { ...productObject, amount }]);
  };
  const resetCart = () => {
    setCartProducts([]);
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
    } else if (
      !cartProducts.some((product) => product.id === productObject.id)
    ) {
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

  const getTotalValue = () => {
    return cartProducts.reduce((currentValue, prevProduct) => {
      return prevProduct.amount * prevProduct.price + currentValue;
    }, 0);
  };
  return (
    <Router basename={process.env.PUBLIC_URL}>
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
          element={
            <Checkout
              cartProducts={cartProducts}
              editCartProduct={editCartProduct}
              totalValue={getTotalValue()}
              resetCart={resetCart}
            />
          }
        />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
