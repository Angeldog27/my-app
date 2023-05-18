import "./App.css";
import Search from "./Search";
import "./Search.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Weather App</h2>
        <footer>
          <a
            href="https://github.com/Angeldog27/Weather-React "
            target="_blank"
            rel="noreferrer"
          >
            Visit my GitHub Repository
          </a>
        </footer>
        <Search />
      </header>
    </div>
  );
}

export default App;
