import computers from "./computers";
import headphones from "./headphones";
import laptops from "./laptops";
import phones from "./phones";
import tablets from "./tablets";

const allProducts = [
  ...computers,
  ...laptops,
  ...tablets,
  ...phones,
  ...headphones,
];

export default allProducts;
