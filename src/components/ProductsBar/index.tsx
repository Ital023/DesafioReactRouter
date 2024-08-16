import './styles.css'
import { NavLink } from "react-router-dom";


export default function ProductsBar() {
  return (
    <div className="drr-products-bar">
      <div className="drr-products-categories">
        <NavLink to={"computers"} className={({isActive}) => isActive ? "menu-products-item menu-products-active" : "menu-products-item"}>Computadores</NavLink>
        <NavLink to={"eletronics"} className={({isActive}) => isActive ? "menu-products-item menu-products-active" : "menu-products-item"}>Eletrônicos</NavLink>
        <NavLink to={"books"} className={({isActive}) => isActive ? "menu-products-item menu-products-active" : "menu-products-item"}>Livros</NavLink>
      </div>
    </div>
  );
}
