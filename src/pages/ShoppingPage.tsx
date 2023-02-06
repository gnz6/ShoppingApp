import ProductCard, {
  ProductButtons,
  ProductImage,
  ProductTitle,
} from "../components/index";
import "../styles/custom-styles.css";

import { products } from "../data/products";

export const ShoppingPage = () => {
  const product = products[0];

  return (
    <div>
      <h1>Shopping</h1>
      <hr />

      <ProductCard
        product={product}
        className="bg-dark"
        key={product.id}
        initialValues={{ count: 4, maxCount: 12 }}
      >
        {({reset, increaseBy, count, isMaxReached, maxCount}) => (
          <>
            <ProductImage className="custom-image" />
            <ProductTitle title="" className="text-white" />
            <ProductButtons className="custom-buttons" />

            <button onClick={()=>increaseBy(-2)}>-2</button>
            <button onClick={reset}>Reset</button>
            { !isMaxReached?  <button onClick={()=>increaseBy(2)}>+2</button>: null  }
          </>
        )}
      </ProductCard>
    </div>
  );
};
