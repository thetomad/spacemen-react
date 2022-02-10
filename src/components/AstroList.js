import React, {useState} from "react";
import AstroItem from "./AstroItem";
import classes from "./AstroList.module.css";
import Backdrop from "./Backdrop";
import Popup from "./Popup";

function AstroList(props) {
  const [popupIsOpen, setPopupIsOpen] = useState(false);
  const [name, setName] = useState('');
  const [craft, setCraft] = useState('');

  function popupHandler(name, craft) {
    setPopupIsOpen(true);
    setName(name);
    setCraft(craft);
  }

  function closePopupHandler() {
    setPopupIsOpen(false);
  }

  return (
    <div className={classes.container}>
      {props.astronauts.map((astronaut) => (
        <AstroItem
          key={astronaut.id}
          id={astronaut.id}
          name={astronaut.name}
          craft={astronaut.craft}
          popupIsOpen={(name, craft) => popupHandler(name, craft)}

        />
        
      ))}
      {popupIsOpen && (
        <Popup
          name={name}
          craft={craft}
          onCancel={closePopupHandler}
          onConfirm={closePopupHandler}
        />
      )}
      {popupIsOpen && <Backdrop onCancel={closePopupHandler} />}
    </div>
  );
}

export default AstroList;
