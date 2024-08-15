import Products from "../../../../components/Products";
import * as productService from "../../../../services/products-service"

export default function Books() {
    return (

        <div className="drr-container-products drr-mt-20">
            {
                productService.findAllBooks()
                .map(product => <Products product={product}></Products>)
            }
        </div>
      
    );
  }