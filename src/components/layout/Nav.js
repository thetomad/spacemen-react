import React from "react";
import { Link } from "react-router-dom";
import classes from "./Nav.module.css";

function Nav() {
  return (
    <header>
      <nav className={classes.nav}>
        <div className={classes.container}>
          <div className={classes.logo}>
            <Link to="/">Space</Link>
          </div>
          <div className={classes.menu}>
            <Link to="/about">About</Link>
            <Link to="/new-astronaut">Become an Astronaut</Link>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Nav;
