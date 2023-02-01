import ProductCard, {ProductButtons, ProductImage, ProductTitle} from "../components/index";

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
        
        {/* <ProductCard product={product}>
          <ProductCard.Image/>
          <ProductCard.Title title=""/>
          <ProductCard.Buttons/>
        </ProductCard> */}


        <ProductCard product={product}>
          <ProductImage/>
          <ProductTitle title=""/>
          <ProductButtons />
        </ProductCard>
      </div>
    </div>
  );
};
