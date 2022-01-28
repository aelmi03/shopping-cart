import React from "react";
import styled from "styled-components";
import allProducts from "../../data/allProducts";
import { useParams } from "react-router";

const ProductDisplay = (props) => {
  const { id } = useParams();
  const product = allProducts.find((product) => product.id === id);
  return (
    <>
      <h1>{product.name}</h1>
      <h1>{product.price}</h1>
      <h1>{product.description}</h1>
    </>
  );
};

export default ProductDisplay;
