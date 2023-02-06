import styles from "../styles/styles.module.css";
import { CSSProperties, ReactElement, createContext } from "react";
import { useProduct } from "../hooks/useProduct";
import {
  Product,
  ProductContextProps,
  onChangeArgs,
  InitialValues,
  ProductCardHandlers,
} from "../interfaces/ProductsInterfaces";

export interface Props {
  // children?: ReactElement | ReactElement[];
  children: (args: ProductCardHandlers) => JSX.Element;
  product: Product;
  className?: string;
  style?: CSSProperties;
  onChange?: (args: onChangeArgs) => void;
  value?: number;
  initialValues?: InitialValues;
}

export const ProductContext = createContext({} as ProductContextProps);

const { Provider } = ProductContext;

export const ProductCard = ({
  children,
  product,
  className,
  style,
  onChange,
  value,
  initialValues,
}: Props) => {
  const { increaseBy, counter, reset, isMaxReached, maxCount } = useProduct({
    onChange,
    product,
    value,
    initialValues,
  });

  return (
    <Provider
      value={{
        counter,
        increaseBy,
        product,
        maxCount: initialValues?.maxCount,
      }}
    >
      <div
        className={`${styles.productCard} ${className}`}
        style={style}
        key={product.id}
      >
        {children({
          count: counter,
          isMaxReached,
          maxCount: initialValues?.maxCount,
          product,
          increaseBy,
          reset,
        })}
      </div>
    </Provider>
  );
};
