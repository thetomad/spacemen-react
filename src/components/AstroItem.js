import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Backdrop from "./Backdrop";
import Popup from "./Popup";
import classes from "./AstroItem.module.css";

function AstroItem(props) {
  const [popupIsOpen, setPopupIsOpen] = useState(false);
  let history = useNavigate();

  function popupHandler() {
    setPopupIsOpen(true);
  }

  function closePopupHandler() {
    setPopupIsOpen(false);
  }
  return (
    <div className={classes.card}>
      <div>
        <h3 className={classes.card__title}>{props.name}</h3>
        <p className={classes.card__subtitle}>{props.craft}</p>
      </div>
      <div className={classes.card__btns}>
        <button className={classes.card__btn} onClick={popupHandler}>
          Pop-up
        </button>
        <button
          className={classes.card__btn}
          onClick={() => {
            history(`/astronaut/${props.id}`);
          }}
        >
          Details
        </button>
      </div>
      {popupIsOpen && (
        <Popup
          name={props.name}
          craft={props.craft}
          onCancel={closePopupHandler}
          onConfirm={closePopupHandler}
        />
      )}
      {popupIsOpen && <Backdrop onCancel={closePopupHandler} />}
      
    </div>
  );
}

export default AstroItem;
