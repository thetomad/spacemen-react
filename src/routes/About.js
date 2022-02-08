import React from "react";
import { Link } from "react-router-dom";
import classes from "./About.module.css";

function About() {
  return (
    <section className={classes.section}>
      <h1 className={classes.title}>
        <span>About - Page in construction</span>
      </h1>
      <button className={classes.btn}>
        <Link to="/">
          <div>Go Back</div>
        </Link>
      </button>
    </section>
  );
}

export default About;
