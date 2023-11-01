import Link from 'next/link';
import React, { useState } from 'react';
import styles from './navbar.module.css';

const Navbar = () => {
  const [isOpen, setIsopen] = useState(false);

  const ToggleSidebar = () => {
    isOpen === true ? setIsopen(false) : setIsopen(true);
  }

  return (
  	<>
    <nav className="navbar is-light" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a className="navbar-item" href="/">
          <img src="/img/logo_etcesp.png" width="100%" height="100%" alt="Logo do ETCESP"/>
        </a>

        <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample" onClick={ToggleSidebar}>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-start">
          <Link className="navbar-item" href="/">
            Home
          </Link>

          <a className="navbar-item" href="/lista-clientes">
            Lista de clientes
          </a>

          <div className="navbar-item has-dropdown is-hoverable">
            <a className="navbar-link">
              Mais opções
            </a>

            <div className="navbar-dropdown">
              <a className="navbar-item">
                About
              </a>
              <a className="navbar-item">
                Jobs
              </a>
              <a className="navbar-item">
                Contact
              </a>
              <hr className="navbar-divider" />
              <a className="navbar-item">
                Report an issue
              </a>
            </div>
          </div>
        </div>

        <div className="navbar-end">
          <div className="navbar-item">

            <div className="buttons">
              <a className="button is-primary">
                <strong>Sign up</strong>
              </a>
                <button  className="button is-light">
                  Login
                </button >
            </div>

          </div>
        </div>
      </div>
    </nav>
    <div className={`sidebar ${isOpen == true ? 'active' : ''}`}>
      <div className="sd-header">
          <h4 className="mb-0">Sidebar Header</h4>
          <div className="btn btn-primary" onClick={ToggleSidebar}><i className="fa fa-times"></i></div>
      </div>
      <div className="sd-body">
          <ul>
              <li>
                <a className="sd-link" href={`/home`}>
                  Home
                </a>
              </li>
              <li>
                <a className="sd-link" href={'/lista-clientes'}>
                  Lista de clientes
                </a>
              </li>
              <li><a className="sd-link">Menu Item 3</a></li>
              <li><a className="sd-link">Menu Item 4</a></li>
              <li><a className="sd-link">Menu Item 5</a></li>
              <li><a className="sd-link">Menu Item 6</a></li>
              <li><a className="sd-link">Sign up</a></li>
              <li>
                <a className="sd-link" href={'login'}>
                  Login
                </a>
              </li>
          </ul>
      </div>
    </div>
    <div className={`sidebar-overlay ${isOpen == true ? 'active' : ''}`} onClick={ToggleSidebar}></div>
    </>
  );
};

export default Navbar;
