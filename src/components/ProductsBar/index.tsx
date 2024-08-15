import './styles.css'
import { NavLink } from "react-router-dom";


export default function ProductsBar() {
  return (
    <div className="drr-products-bar">
      <div className="drr-products-categories">
        <NavLink to={"computers"}>Computadores</NavLink>
        <NavLink to={"/"}>Eletrônicos</NavLink>
        <NavLink to={"/"}>Livros</NavLink>
      </div>
    </div>
  );
}
