import "./App.css";
import Search from "./Search";

function App() {
  let weatherData = {
    city: "Tabanan",
    date: "Wednesday 15:00",
    temperature: "20",
    description: "Cloudy",
    humidity: "63%",
    wind: "3.33 km/h",
    icon: "🌥️",
  };
  return (
    <div className="Weather">
      <header>
        <Search />
      </header>
      <main>
        <div className="weather-data">
          <div>
            <h1 className="weather-city" id="weather-city">
              {weatherData.city}
            </h1>
            <p className="weather-details">
              <span id="time">{weatherData.date}</span>,{" "}
              <span id="description">{weatherData.description}</span>
              <br />
              Humidity: <strong id="humidity">{weatherData.humidity}</strong>,
              Wind:
              <strong id="wind-speed">{weatherData.wind}</strong>
            </p>
          </div>
          <div className="weather-temp-data">
            <div id="icon" className="weather-icon">
              {weatherData.icon}
            </div>
            <div className="weather-temperature" id="temperature">
              {weatherData.temperature}
            </div>
            <div className="temperature-unit">°C</div>
          </div>
        </div>
      </main>
      <footer>
        This page was coded by{"\t"}
        <a
          href="https://github.com/melania7730"
          rel="noreferrer"
          target="_blank"
        >
          Melania
        </a>
        {"\t"}
        is open sourced on{"\t"}
        <a
          href="https://github.com/melania7730/react-weather-app-week4homework"
          rel="noreferrer"
          target="_blank"
        >
          {"\t"}
          Github{"\t"}
        </a>
        and hosted on{"\t"}
        <a
          href="https://react-homework-week4.netlify.app"
          rel="noreferrer"
          target="_blank"
        >
          Netlify
        </a>
      </footer>
    </div>
  );
}
export default App;
