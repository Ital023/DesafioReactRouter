import { Link, NavLink } from "react-router-dom";
import HomeIcon from "../../assets/HomeIcon.svg";

export default function Header() {
  return (
    <header className="drr-header-primary">
      <nav className="drr-container">
        <div className="drr-navbar-left">
          <div className="dsc-menu-item">
            <NavLink to={"/"}>Início</NavLink>
            <NavLink to={"products"}>Produtos</NavLink>
            <NavLink to={"about"}>Sobre nós</NavLink>
          </div>
        </div>

        <Link to={"/"}>
          <img src={HomeIcon} alt="Home-Icon" />
        </Link>
      </nav>
    </header>
  );
}
