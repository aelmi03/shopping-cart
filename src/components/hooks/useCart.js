import { useState } from "react";

const useCart = () => {
  const [cartProducts, setCartProducts] = useState([]);
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
  return [
    cartProducts,
    resetCart,
    editCartProduct,
    getAmountTotal,
    getTotalValue,
  ];
};

export default useCart;
