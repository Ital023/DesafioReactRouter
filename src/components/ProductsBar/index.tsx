import './styles.css'
import { NavLink } from "react-router-dom";


export default function ProductsBar() {
  return (
    <div className="drr-products-bar">
      <div className="drr-products-categories">
        <NavLink to={"computers"}>Computadores</NavLink>
        <NavLink to={"eletronics"}>Eletrônicos</NavLink>
        <NavLink to={"books"}>Livros</NavLink>
      </div>
    </div>
  );
}
