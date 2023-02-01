import styles from "../styles/styles.module.css";
import { CSSProperties, ReactElement, createContext } from "react";
import { useProduct } from "../hooks/useProduct";
import { Product, ProductContextProps } from "../interfaces/ProductsInterfaces";

export interface Props {
  children?: ReactElement | ReactElement[];
  product: Product;
  className? :string;
  style?: CSSProperties
}


export const ProductContext = createContext({} as ProductContextProps);

const { Provider } = ProductContext;

export const ProductCard = ({ children, product, className, style }: Props) => {
  const { increaseBy, counter } = useProduct();

  return (
    <Provider
      value={{
        counter,
        increaseBy,
        product,
      }}
    >
      <div className={`${styles.productCard} ${className}`} style={style} key={product.id}>
        {children}
      </div>
    </Provider>
  );
};

