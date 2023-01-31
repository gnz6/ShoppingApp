import styles from "../styles/styles.module.css";
import noImage from "../assets/no-image.jpg";
import { useState } from "react";
import { useProduct } from "../hooks/useProduct";

interface Props {
 product : Product
}

interface Product {
  id: string;
  title: string;
  img?: string;
}

export const ProductCard = ({ product }:Props) => {
  const { increaseBy, counter } = useProduct();

  return (
    <div className={styles.productCard} key={product.id}>

       <img src={product.img? product.img : noImage } className={styles.productImg} alt="No image" /> 
      <span className={styles.productDescription}>{product.title}</span>
      <div className={styles.buttonsContainer}>
        <button className={styles.buttonMinus} onClick={() => increaseBy(-1)}>
          {" "}
          -{" "}
        </button>
        <div className={styles.countLabel}> {counter}</div>
        <button className={styles.buttonAdd} onClick={() => increaseBy(1)}>
          {" "}
          +{" "}
        </button>
      </div>
    </div>
  );
};
