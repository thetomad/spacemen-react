import React from "react";
import classes from "./Popup.module.css";

function Popup(props) {
  function backHandler() {
    props.onCancel();
  }

  return (
    <div className={classes.popup}>
      <p className={classes.title}>{props.name}</p>
      <p className={classes.subtitle}>{props.craft}</p>
      <button className={classes.btn} onClick={backHandler}>
        Go Back
      </button>
    </div>
  );
}

export default Popup;
