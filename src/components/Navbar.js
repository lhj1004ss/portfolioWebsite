import React, { Component } from "react";
import { Link } from "react-scroll";
import { FaAlignRight } from "react-icons/fa";

export default class Navbar extends Component {
  state = {
    isOpen: false,
  };

  handleToggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };
  state = {
    isOpen: false,
  };

  handleToggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    return (
      <nav className="navbar">
        <div className="nav-center">
          <div className="nav-header">
            <Link
              to="home"
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-300}
              duration={500}
            >
              HyoJe
            </Link>
            <button
              type="button"
              className="nav-btn"
              onClick={this.handleToggle}
            >
              <FaAlignRight className="nav-icon"></FaAlignRight>
            </button>
          </div>
          <div className="nav-link">
            <ul
              className={this.state.isOpen ? "nav-links show-nav" : "nav-links"}
            >
              <li className="nav-link">
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
              <li className="nav-link">
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
              <li className="nav-link">
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
              <li className="nav-link">
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
        </div>
      </nav>
    );
  }
}
