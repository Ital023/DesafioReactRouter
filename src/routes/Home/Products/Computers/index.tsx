import Products from "../../../../components/Products";
import * as productService from "../../../../services/products-service"

export default function Computers() {
    return (

        <div className="drr-container-products drr-mt-20">
            {
                productService.findAllComputers()
                .map(product => <Products product={product}></Products>)
            }
        </div>
      
    );
  }