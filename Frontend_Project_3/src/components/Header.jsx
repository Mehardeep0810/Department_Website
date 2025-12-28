import { NavLink } from "react-router-dom";
import "../styles/Header.css";
import logo from "../assets/logo.png";

const Header = () => {
  return (
    <header className="form-header">
      <div className="header-left">
        <img src={logo} alt="Logo" className="header-logo" />
        <h2>Computer Applications</h2>
      </div>

      <nav>
         <NavLink to="/home">Home</NavLink>
        <NavLink to="/admissions">Admissions</NavLink>
        <NavLink to="/faculty">Faculty</NavLink>
        
      </nav>
    </header>
  );
};

export default Header;
