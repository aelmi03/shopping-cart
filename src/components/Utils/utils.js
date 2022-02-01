export function getSimiliarItems(
  originalProduct,
  arrayOfProducts,
  numberOfItems
) {
  return arrayOfProducts
    .filter((product) => product.id !== originalProduct.id)
    .sort(() => 0.5 - Math.random())
    .slice(0, numberOfItems);
}
