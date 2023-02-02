import ProductCard, {
  ProductButtons,
  ProductImage,
  ProductTitle,
} from "../components/index";
import "../styles/custom-styles.css";
import { useShopping } from "../hooks/useShopping";
import { products } from "../data/products";

export const ShoppingPage = () => {
  const { onProductCountChange, shoppingCart } = useShopping();

  return (
    <div>
      <h1>Shopping</h1>
      <hr />

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
        }}
      >
        {products.map((product) => (
          <ProductCard
            product={product}
            className="bg-dark"
            key={product.id}
            onChange={onProductCountChange}
            value={shoppingCart[product.id]?.count || 0}
          >
            <ProductImage className="custom-image" />
            <ProductTitle title="" className="text-white" />
            <ProductButtons className="custom-buttons" />
          </ProductCard>
        ))}
      </div>

      <div className="shopping-cart">
        {Object.entries(shoppingCart).map(([key, product]) => (
          <ProductCard
            key={key}
            product={product}
            className="bg-dark"
            style={{ width: "100px" }}
            value={product.count}
            onChange={onProductCountChange}
          >
            <ProductImage
              className="custom-image"
              style={{ boxShadow: "10px 10px 10px " }}
            />
            <ProductButtons className="custom-buttons" />
          </ProductCard>
        ))}
      </div>
    </div>
  );
};
