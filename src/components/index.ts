import { ProductCard  as ProductCardCopmonent} from './ProductCard';
import { ProductTitle } from './ProductTitle';
import { ProductImage } from './ProductImage';
import { ProductButtons } from './ProductButtons';
import { ProductCardMainProps } from '../interfaces/ProductsInterfaces';
export { ProductButtons } from './ProductButtons';
export { ProductImage } from './ProductImage';
export { ProductTitle } from './ProductTitle';
// export { ProductCard } from './ProductCard';

const ProductCard : ProductCardMainProps =  Object.assign( ProductCardCopmonent, {
    Title: ProductTitle,
    Image: ProductImage,
    Buttons: ProductButtons
})

export default ProductCard