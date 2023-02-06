import { Props as ProductCardProps, ProductCard } from '../components/ProductCard';
import { Props as TitleProps } from "../components/ProductTitle";
import { Props as ImageProps } from "../components/ProductImage";
import { Props as ButtonProps } from "../components/ProductButtons";

export interface Product {
  id: string;
  title: string;
  img?: string;
}

export interface ProductButtonsProps {
  counter: number;
  increaseBy: (value: number) => void;
}

export interface ProductContextProps {
  counter: number;
  increaseBy: (value: number) => void;
  product: Product;
  maxCount? : number
}


export interface ProductCardMainProps{
  ({ children, product }: ProductCardProps ) : JSX.Element;
  Title? :( Props : TitleProps) => JSX.Element;
  Image? : ( Props: ImageProps ) => JSX.Element;
  Buttons: ( Props : ButtonProps) => JSX.Element
}

export interface onChangeArgs {
product : Product,
 count : number 
}

export interface InitialValues{
  count ? : number
  maxCount ? : number
}

export interface ProductCardHandlers {

  count: number,
  isMaxReached: boolean,
  maxCount?:number,
  product: Product

  increaseBy: (value:number)=> void,
  reset :()=>void
}