import { useState, useEffect, useRef } from "react";
import {
  Product,
  onChangeArgs,
  InitialValues,
} from "../interfaces/ProductsInterfaces";

interface useProductArgs {
  product: Product;
  onChange?: (args: onChangeArgs) => void;
  value?: number;
  initialValues?: InitialValues;
}

export const useProduct = ({
  onChange,
  product,
  value = 0,
  initialValues,
}: useProductArgs) => {
  const [counter, setCounter] = useState<number>(
    (value = initialValues?.count || value)
  );

  const isMounted = useRef(false);

  const increaseBy = (value: number, maxCount = initialValues?.maxCount) => {
    
    const newValue = Math.max(counter + value, 0);
    if (!maxCount) {
      setCounter(newValue);
      onChange && onChange({ count: newValue, product });
    }
    if( maxCount && newValue <= maxCount){
    setCounter(newValue);
    onChange && onChange({ count: newValue, product });
  }

}

const reset =( )=>{
  setCounter(initialValues?.count || value)
}


  useEffect(() => {
    if (!isMounted.current) return;
    setCounter(value);
  }, [value]);

  useEffect(() => {
    isMounted.current = true;
  }, []);

  return {
    counter,
    maxCount: initialValues?.maxCount,
    isMaxReached : !!initialValues?.count && initialValues.maxCount === counter,
    increaseBy,
    reset,
  };
};
