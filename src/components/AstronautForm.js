import React from "react";
import { useRef } from "react";
import classes from "./AstronautForm.module.css";

function AstronautForm(props) {
  const nameInputRef = useRef();
  const craftInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredCraft = craftInputRef.current.value;

    const astronautData = {
      name: enteredName,
      craft: enteredCraft,
    };

    props.onAddAstronaut(astronautData);
  }
  return (
    <div className={classes.form__container}>
      <form className={classes.form} onSubmit={submitHandler}>
        <div>
          <label className={classes.label} htmlFor="name">
            Name:{" "}
          </label>
          <input type="text" required id="name" ref={nameInputRef} />
        </div>
        <div>
          <label className={classes.label} htmlFor="craft">
            Craft:{" "}
          </label>
          <input type="text" required id="craft" ref={craftInputRef} />
        </div>
        <div className={classes.actions}>
          <button>Become Astronaut!</button>
        </div>
      </form>
    </div>
  );
}

export default AstronautForm;
