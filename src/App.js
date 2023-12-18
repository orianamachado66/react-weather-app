import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="New York" />

        <footer>
          This project was coded by{" "}
          <a
            href="https://www.linkedin.com/in/oriana-machado-771014130/"
            target="_blank"
            rel="noreferrer"
          >
            Oriana Machado
          </a>{" "}
          and it is open-sourced in{" "}
          <a
            href="https://github.com/orianamachado66/react-weather-app"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>{" "}
        </footer>
      </div>
    </div>
  );
}
