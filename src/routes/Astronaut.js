import React from "react";
import { useParams, Link } from "react-router-dom";
import classes from "./Astronaut.module.css";

function Astronaut(props) {
  let { id } = useParams();

  return (
    <section className={classes.section}>
      <h1 className={classes.title}>
        <span>Page in construction</span>
      </h1>
      <button className={classes.btn}>
        <Link to="/">
          <div>Go Back</div>
        </Link>
      </button>
    </section>
  );
}

export default Astronaut;
