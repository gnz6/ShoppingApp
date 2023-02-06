import ProductCard, {
  ProductButtons,
  ProductImage,
  ProductTitle,
} from "../components/index";

import { products } from "../data/products";

export const ShoppingPage = () => {
  const product = products[0];

  return (
    <div>
      <h1>Shopping</h1>
      <hr />

      <ProductCard
        product={product}
        key={product.id}
        initialValues={{ count: 4, maxCount: 12 }}
      >
        {({reset, increaseBy, count, isMaxReached, maxCount}) => (
          <>
            <ProductImage  />
            <ProductTitle title=""  />
            <ProductButtons  />
          </>
        )}
      </ProductCard>
    </div>
  );
};
