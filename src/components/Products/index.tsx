import './styles.css'
import { ProductDTO } from "../../models/ProductDTO";

type Props = {
  product: ProductDTO;
}

export default function Products({product}: Props) {
  return (
      <h2 className="drr-products-name">{product.name}</h2>
  );
}
