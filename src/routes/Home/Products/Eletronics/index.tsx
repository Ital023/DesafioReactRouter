import Products from "../../../../components/Products";
import * as productService from "../../../../services/products-service"

export default function Eletronics() {
    return (

        <div className="drr-container-products drr-mt-20">
            {
                productService.findAllEletronics()
                .map(product => <Products product={product}></Products>)
            }
        </div>
      
    );
  }