import "./styles.css"
import { Link, NavLink } from "react-router-dom";
import HomeIcon from "../../assets/HomeIcon.svg";

export default function Header() {
  return (
    <header className="drr-header-primary">
      <nav className="drr-container">
        <div className="drr-navbar-left">
          <div className="drr-menu-item">
            <NavLink to="/home" className={({isActive}) => isActive ? "menu-header-item menu-header-active" : "menu-header-item"}>Início</NavLink>
            <NavLink to="/products" className={({isActive}) => isActive ? "menu-header-item menu-header-active" : "menu-header-item"}>Produtos</NavLink>
            <NavLink to="/about" className={({isActive}) => isActive ? "menu-header-item menu-header-active" : "menu-header-item"}>Sobre nós</NavLink>
          </div>
        </div>

        <Link to={"/"}>
          <img src={HomeIcon} alt="Home-Icon" />
        </Link>
      </nav>
    </header>
  );
}
