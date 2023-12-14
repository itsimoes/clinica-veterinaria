import React from "react";
import "./style.scss";
import { Link } from "react-scroll";

// icons
import { MdOutlinePets } from "react-icons/md";

const Navbar = () => {
  return (
    <div className="navbar_wrapper">
      <div className="navbar_container">
        <Link to="home" className="navbar_logo">
          <MdOutlinePets />
          <div className="navbar_logo_text_container">
            <h4>Sua logo aqui</h4>
            <h6>Lorem ipsum dolor</h6>
          </div>
        </Link>
        <div className="navbar_links_container">
          <Link to="products" smooth className="button_type_1">
            ADOTAR
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
