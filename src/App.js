import "./App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Videos from "./RecomendedVideos";

function App() {
  return (
    <div className="app-container">
      <Header />
      <div className="left-right-container">
        <Sidebar />
        <Videos />
      </div>
    </div>
  );
}

export default App;
