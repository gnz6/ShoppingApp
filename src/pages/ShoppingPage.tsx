import ProductCard, {
  ProductButtons,
  ProductImage,
  ProductTitle,
} from "../components/index";
import "../styles/custom-styles.css";

export const ShoppingPage = () => {
  const product = {
    id: "1",
    title: "Coffee Mug",
    img: "./coffee-mug.png",
  };

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
        <ProductCard product={product} className="bg-dark">
          <ProductCard.Image className="custom-image" />
          <ProductCard.Title title="" className="text-white" />
          <ProductCard.Buttons className="custom-buttons" />
        </ProductCard>

        <ProductCard product={product} className="bg-dark">
          <ProductImage className="custom-image" />
          <ProductTitle title="" className="text-white" />
          <ProductButtons className="custom-buttons" />
        </ProductCard>

        <ProductCard product={product} className="" style={{
          backgroundColor: "#70D1F8"
        }}>
          <ProductImage  />
          <ProductTitle title=""  />
          <ProductButtons />
        </ProductCard>
      </div>
    </div>
  );
};
