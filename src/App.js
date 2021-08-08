import "./App.css";

export default function App() {
  return (
    <div class="container body">
      <div className="App">
        <form>
          <div className="row row-spacing">
            <div className="col-8">
              <input
                type="text"
                className="form-control"
                autofocus="on"
                placeholder="Search for a city"
              />
            </div>
            <div className="col-2">
              <input type="submit" className="btn btn-primary" value="Search" />
            </div>
            <div className="col-2">
              <button className="btn btn-success">Current</button>
            </div>
          </div>
        </form>
        <div className="row row-spacing">
          <div className="col-6">
            <div className="current-location">
              <h1>Melton</h1>
            </div>
          </div>
        </div>

        <div className="row row-spacing">
          <div className="col-4">
            <p className="date"></p>
          </div>
          <div className="col-2">
            <img
              src="https://image.flaticon.com/icons/png/512/1163/1163708.png"
              alt="Weather Icon"
              className="current-icon"
            />
            <span className="temp-now"></span>
            <span className="units">15°C </span>
          </div>

          <div className="col-6">
            <p>
              <span></span>
              <br />
              Humidity: <span>50</span>%
              <br />
              Wind: <span>10</span>km/h
            </p>
          </div>
        </div>
        <div className="weather-forecast"></div>
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
