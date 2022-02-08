import React from "react";
import { useState, useEffect } from "react";
import AstroList from "../components/AstroList";
import classes from "./Home.module.css";

function Home() {
  const [astronauts, setAstronauts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch("http://api.open-notify.org/astros.json")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const astrts = [];

        for (const key in data.people) {
          const astrt = {
            id: key,
            ...data.people[key],
          };

          astrts.push(astrt);
        }

        setIsLoading(false);
        setAstronauts(astrts);
      });
  }, []);

  if (isLoading) {
    return (
      <div className={classes.spinner}>
        <span>Loading...</span>
        <div className={classes.half__spinner}></div>
      </div>
    );
  }
  //console.log(astronauts);
  return (
    <section className={classes.section}>
      <h1 className={classes.title}>
        All Astronauts<span> In Space Right Now</span>
      </h1>
      <AstroList astronauts={astronauts} />
    </section>
  );
}

export default Home;
