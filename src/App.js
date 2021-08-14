import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <footer>
          <a
            href="https://github.com/Warri0r-Fairy/react-weather-app"
            target="_blank"
            rel="noreferrer"
          >
            Code open-sourced
          </a>
          <span> by Jacqui Lewis</span>
        </footer>
      </div>
    </div>
  );
}
