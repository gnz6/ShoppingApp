import { Product } from "../interfaces/ProductsInterfaces";

const product1 = {
    id: "1",
    title: "Coffee Mug",
    img: "./coffee-mug.png",
  };

  const product2 = {
    id: "2",
    title: "Coffee Mug Meme",
    img: "./coffeemug2.webp",
  };

  export const products: Product[] = [product1, product2];