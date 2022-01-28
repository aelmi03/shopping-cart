import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header.js";
import Home from "./components/Home/Home.js";
import Footer from "./components/Footer.js";
import allProducts from "./data/allProducts.js";
import Shop from "./components/Shop/Shop.js";
import { useState } from "react";

function App() {
  const [cartProducts, setCartProducts] = useState([
    {
      product: allProducts[0],
      amount: 35,
    },
  ]);
  const deleteProduct = (productObject) => {
    setCartProducts(
      cartProducts.filter((product) => product.id !== productObject.id)
    );
  };
  const addProduct = (productObject) => {
    setCartProducts(...cartProducts, {
      product: productObject,
      amount: 1,
    });
  };

  const changeProductAmount = (productObject, amount) => {
    setCartProducts(
      cartProducts.map((product) => {
        if (product.id === productObject.id) {
          return {
            product,
            amount,
          };
        }
        return product;
      })
    );
  };
  const editCardProducts = (productObject, amount) => {
    if (amount === 0) {
      deleteProduct(productObject);
    }
    if (!cartProducts.includes(productObject)) {
      addProduct(productObject);
    }

    if (cartProducts.includes(productObject)) {
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
        <Route path="/shop" element={<Shop />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
