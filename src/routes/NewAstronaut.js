import React from "react";
import { useNavigate } from "react-router-dom";
import AstronautForm from "../components/AstronautForm";
import classes from "./NewAstronaut.module.css";

function NewAstronaut() {
  const navigate = useNavigate();
  function addAstronaut() {
    navigate("/");
  }

  return (
    <section className={classes.section}>
      <h1 className={classes.title}>
        Do You Wanna <span>Be An Astronaut?</span>
      </h1>
      <AstronautForm onAddAstronaut={addAstronaut} />
    </section>
  );
}

export default NewAstronaut;
