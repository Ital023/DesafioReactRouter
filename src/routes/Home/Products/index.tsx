import { Outlet } from "react-router-dom";
import ProductsBar from "../../../components/ProductsBar";

export default function Products() {
    return (
        <main className="drr-container drr-mt-20">
            <ProductsBar/>
            <Outlet/>

        </main>
      
    );
  }