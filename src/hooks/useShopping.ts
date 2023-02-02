import { useState } from "react";
import { Product } from "../interfaces/ProductsInterfaces";

export const useShopping = ()=>{

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

  const products: Product[] = [product1, product2];

  interface ProductInCart extends Product {
    count: number
  }

  const [ shoppingCart , setShoppingCart ] = useState<{[key:string] : ProductInCart}>({})

  const onProductCountChange = ({count , product} : {count : number, product : Product}) =>{

    setShoppingCart( oldState => {

        if(count === 0){
            const{[product.id]: toDelete, ...rest} = oldState;
            return rest
        }
        return{
            ...oldState,
            [product.id]:{...product, count}
        }

    })
}

return {
     onProductCountChange, shoppingCart
}

}