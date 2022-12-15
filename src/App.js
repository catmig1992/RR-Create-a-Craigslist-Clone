// Import data
import Gallery from "./Gallery";
import Searchbar from "./Searchbar";
import Directory from "./Directory";
import Sidebar from "./Sidebar";

// Import components
import "./App.css";

function App() {
  return (
    <div>
      <h1>craigslist</h1>
      <div className="App">
        <Gallery />
        <Searchbar />
        <Directory />
        <Sidebar />
      </div>
    </div>
  );
}

export default App;
