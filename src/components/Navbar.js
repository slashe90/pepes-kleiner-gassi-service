import React from "react";
import { Link } from "gatsby";
import logo from "../img/logo.svg";
import styled from 'styled-components'

const Navbar = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      navBarActiveClass: "",
    };
  }

  toggleHamburger() {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: "is-active",
            })
          : this.setState({
              navBarActiveClass: "",
            });
      }
    );
  }

  render() {
    return (
      <nav
        className="navbar is-transparent"
        role="navigation"
        aria-label="main-navigation"
      >
        <div className="container">
          <Inner>
            <div className="navbar-brand">
              <Link to="/" className="navbar-item" title="Logo">
                <img src={logo} alt="Kaldi" style={{ width: "88px" }} />
              </Link>
              {/* Hamburger menu */}
              <div
                  className={`navbar-burger burger ${this.state.navBarActiveClass}`}
                  data-target="navMenu"
                  role="menuitem"
                  tabIndex={0}
                  onKeyPress={() => this.toggleHamburger()}
                  onClick={() => this.toggleHamburger()}
              >
                <span />
                <span />
                <span />
              </div>
            </div>
            <div
                id="navMenu"
                className={`navbar-menu ${this.state.navBarActiveClass}`}
            >
              <div className="navbar-start has-text-centered">
                <Link className="navbar-item" to="/">
                  Willkommen
                </Link>
                <Link className="navbar-item" to="/ueber-uns">
                  Über uns
                </Link>
                <Link className="navbar-item" to="/gassi-gehen">
                  Gassi gehen
                </Link>
                <Link className="navbar-item" to="/preise">
                  Preise
                </Link>
                <Link className="navbar-item" to="/kontakt">
                  Kontakt
                </Link>
              </div>
            </div>
          </Inner>
        </div>
      </nav>
    );
  }
};

const Inner = styled.nav`
  align-items: center;
  display: flex;
  flex-direction: column;
  width: 100%;
`

export default Navbar;
