import React, { Component } from "react";
import { Link } from "react-scroll";

export default class Navbar extends Component {
  state = {
    isOpen: false,
  };
  handleToggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };
  render() {
    return (
      <nav className="nav">
        <Link className="logo" to="/">
          Hyoje
        </Link>
        <div className="navbar">
          <ul className="nav-links">
            <li>
              <Link
                to="home"
                activeClass="active"
                spy={true}
                smooth={true}
                offset={-300}
                duration={500}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="project"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
              >
                Project
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
