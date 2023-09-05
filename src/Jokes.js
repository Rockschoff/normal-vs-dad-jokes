import "./styles.css";
import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import getJoke from "./getJoke";
export default function Jokes(props) {
  const [joke, setJoke] = useState("This is a nice joke hahaha");
  useEffect(function () {
    getJoke(props, setJoke);
  }, []);

  async function HandleGetJoke(){
    getJoke(props , setJoke)
  }

  return (
    <div className="bounding-box">
      <h1>{props.type == "dad_jokes" ? "DAD JOKES" : "JOKES"}</h1>
      <p>{joke}</p>
      <Button variant="dark" size="md" onClick={HandleGetJoke}>
        New Joke
      </Button>
    </div>
  );
}
