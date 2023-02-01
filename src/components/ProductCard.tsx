import styles from "../styles/styles.module.css";
import { createContext } from "react";
import { useProduct } from "../hooks/useProduct";
import { ProductContextProps, Props } from "../interfaces/ProductsInterfaces";

export const ProductContext = createContext({} as ProductContextProps);

const { Provider } = ProductContext;

export const ProductCard = ({ children, product }: Props) => {
  const { increaseBy, counter } = useProduct();

  return (
    <Provider
      value={{
        counter,
        increaseBy,
        product,
      }}
    >
      <div className={styles.productCard} key={product.id}>
        {children}
      </div>
    </Provider>
  );
};

