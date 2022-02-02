import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home/";
import Footer from "./components/Footer.js";
import Shop from "./components/Shop/Shop.js";
import ProductDisplay from "./components/ProductDisplay";
import Checkout from "./components/Checkout/Checkout";
import useCart from "./components/hooks/useCart";

function App() {
  const [
    cartProducts,
    resetCart,
    editCartProduct,
    getAmountTotal,
    getTotalValue,
  ] = useCart();
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
