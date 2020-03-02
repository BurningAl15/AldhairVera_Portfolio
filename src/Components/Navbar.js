import React from "react";
import { Link } from "react-router-dom";
import logo from "../Image/NavIcon.svg";

class NavBar extends React.Component {
  render() {
    return (
      <div className="Navbar">
        <Link className="Navbar__brand" to="/">
          <img className="Navbar__brand-logo" src={logo} alt=" " />
        </Link>
        <div className="Navbar_subSections">
          <Link className="Navbar_Links" to="/Gaming">
            <p className="Navbar_p">Games</p>
          </Link>
          <Link className="Navbar_Links" to="/Gaming">
            <p className="Navbar_p">Blog</p>
          </Link>
          <Link className="Navbar_Links" to="/Gaming">
            <p className="Navbar_p">Blog</p>
          </Link>
        </div>
      </div>
    );
  }
}

export default NavBar;
