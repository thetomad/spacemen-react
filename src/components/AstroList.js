import React from "react";
import AstroItem from "./AstroItem";
import classes from "./AstroList.module.css";

function AstroList(props) {
  return (
    <div className={classes.container}>
      {props.astronauts.map((astronaut) => (
        <AstroItem
          key={astronaut.id}
          id={astronaut.id}
          name={astronaut.name}
          craft={astronaut.craft}
        />
      ))}
    </div>
  );
}

export default AstroList;
