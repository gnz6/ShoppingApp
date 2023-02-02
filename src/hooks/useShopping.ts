import { useState } from "react";
import { Product } from "../interfaces/ProductsInterfaces";

export const useShopping = ()=>{



  interface ProductInCart extends Product {
    count: number
  }

  const [ shoppingCart , setShoppingCart ] = useState<{[key:string] : ProductInCart}>({})

  const onProductCountChange = ({count , product} : {count : number, product : Product}) =>{

    setShoppingCart( oldState => {

      const productInCart: ProductInCart = oldState[product.id] || {...product, count: 0};
      if( Math.max(productInCart.count + count, 0 ) > 0 ){
        productInCart.count += count
        return {
          ...oldState,
          [product.id]: productInCart
        }
      }
      //Si no entra, borro el producto
      const { [product.id]: toDelete, ...rest } = oldState
           return rest

    })}

return {
     onProductCountChange, shoppingCart
}

}